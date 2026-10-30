// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Animate stat numbers when visible
const statNumbers = document.querySelectorAll('.stat-number');
let animated = false;

function animateNumbers() {
  if (animated) return;
  const section = document.querySelector('.stats');
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    animated = true;
    statNumbers.forEach(el => {
      const target = parseInt(el.dataset.target);
      const duration = 1500;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor(progress * target);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target + '+';
      }
      requestAnimationFrame(tick);
    });
  }
}

window.addEventListener('scroll', animateNumbers);
animateNumbers();

// Contact form
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Mensaje enviado. Gracias por contactarnos!');
  e.target.reset();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
