lucide.createIcons();

/* Mobile menu */
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = mobileMenu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll("#mobile-menu a").forEach((a) =>
  a.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }),
);

/* Close mobile menu on outside click */
document.addEventListener("click", (e) => {
  if (
    mobileMenu.classList.contains("open") &&
    !mobileMenu.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    mobileMenu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

/* FAQ accordion */
function toggleFaq(btn) {
  const body = btn.nextElementSibling;
  const icon = btn.querySelector(".faq-icon");
  const isOpen = body.classList.contains("open");

  document.querySelectorAll(".faq-body").forEach((b) => b.classList.remove("open"));
  document.querySelectorAll(".faq-icon").forEach((i) => i.classList.remove("open"));
  document
    .querySelectorAll("[onclick='toggleFaq(this)']")
    .forEach((b) => b.setAttribute("aria-expanded", "false"));

  if (!isOpen) {
    body.classList.add("open");
    icon.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
  }
}

/* Scroll animations */
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
);
document.querySelectorAll(".aos").forEach((el) => obs.observe(el));

/* Smooth anchor scrolling */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (href.length <= 1) return;
    const t = document.querySelector(href);
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
