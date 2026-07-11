const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a, .hero-actions a[href^="#"], .project-card a[href^="#"]');
const sections = document.querySelectorAll('main section[id]');
const revealItems = document.querySelectorAll('.reveal');

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');

    if (!targetId || !targetId.startsWith('#')) {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    navLinks.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => revealObserver.observe(item));

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);

    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-links a').forEach((link) => link.classList.remove('active'));
      activeLink?.classList.add('active');
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach((section) => navObserver.observe(section));