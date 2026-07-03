// ============ Mobile nav toggle ============
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav after clicking a link
siteNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============ Footer year ============
document.getElementById('year').textContent = new Date().getFullYear();

// ============ Contact form (front-end only placeholder) ============
// NOTE: This does not actually send an email. Wire it up to a service like
// Formspree, EmailJS, or your own backend endpoint before going live.
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    status.textContent = 'Please fill in all fields before sending.';
    status.style.color = 'var(--redline)';
    return;
  }

  // TODO: replace this block with a real submission, e.g.:
  // fetch('https://formspree.io/f/yourFormId', { method: 'POST', body: new FormData(form) })

  status.textContent = 'Message received — I\u2019ll get back to you soon.';
  status.style.color = 'var(--blueprint)';
  form.reset();
});

// ============ Scroll reveal ============
const revealTargets = document.querySelectorAll('.sheet, .project-card, .timeline__item');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  revealTargets.forEach(target => {
    target.classList.add('reveal');
    revealObserver.observe(target);
  });
}
