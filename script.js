const menuButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

function closeMenu() {
  if (!menuButton || !mobileMenu) return;
  menuButton.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("open");
  document.body.classList.remove("menu-open");
}

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(willOpen));
    mobileMenu.classList.toggle("open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
  });
  mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
  window.addEventListener("resize", () => { if (window.innerWidth > 1000) closeMenu(); });
}

const animatedElements = document.querySelectorAll(".aos");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .08, rootMargin: "0px 0px -35px 0px" });
  animatedElements.forEach((element) => observer.observe(element));
} else {
  animatedElements.forEach((element) => element.classList.add("visible"));
}

const contactForm = document.querySelector("[data-contact-form]");
const formSuccess = document.querySelector("[data-form-success]");
if (contactForm && formSuccess) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = "שולחת...";
    try {
      const body = new URLSearchParams(new FormData(contactForm));
      const response = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
      if (!response.ok) throw new Error("Form submission failed");
      contactForm.classList.add("hidden");
      formSuccess.classList.add("visible");
      formSuccess.focus();
    } catch {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
      const whatsappUrl = contactForm.dataset.whatsapp;
      if (whatsappUrl) window.location.href = whatsappUrl;
    }
  });
}
