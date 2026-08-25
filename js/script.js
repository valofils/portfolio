// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Cursor glow effect
const glow = document.getElementById("cursorGlow");
window.addEventListener("pointermove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

// Reveal on scroll
const revealTargets = document.querySelectorAll(
  ".section, .skill-card, .project-card, .timeline li, .cert-card, .faq-item, .cta-final, .language-card, .gallery-item, .video-wrapper, .softskill-card, .stats-band, .availability-card, .quote-band, .roadmap-item"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealTargets.forEach((el) => observer.observe(el));

// Header shadow on scroll
const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  header.style.boxShadow = window.scrollY > 10 ? "0 8px 24px -16px rgba(0,0,0,0.6)" : "none";
});

// Contact form (front-end only placeholder)
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");
  formNote.textContent = `Merci ${name} ! Ce formulaire est un exemple statique — connecte-le à un service (Formspree, EmailJS...) ou à ton backend pour recevoir les messages.`;
  form.reset();
});
