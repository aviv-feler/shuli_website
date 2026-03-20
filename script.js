lucide.createIcons();

/* Mobile menu */
document.getElementById("menu-btn").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("open");
});
document
  .querySelectorAll("#mobile-menu a")
  .forEach((a) =>
    a.addEventListener("click", () =>
      document.getElementById("mobile-menu").classList.remove("open"),
    ),
  );

/* FAQ accordion */
function toggleFaq(btn) {
  const body = btn.nextElementSibling;
  const icon = btn.querySelector(".faq-icon");
  const isOpen = body.classList.contains("open");
  document
    .querySelectorAll(".faq-body")
    .forEach((b) => b.classList.remove("open"));
  document
    .querySelectorAll(".faq-icon")
    .forEach((i) => i.classList.remove("open"));
  if (!isOpen) {
    body.classList.add("open");
    icon.classList.add("open");
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
    const t = document.querySelector(a.getAttribute("href"));
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
