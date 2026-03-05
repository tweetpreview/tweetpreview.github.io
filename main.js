// main.js — Scroll reveal, smooth anchors, misc enhancements

(function () {
  // ---- SCROLL REVEAL ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  function observeRevealEls() {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  // Components load synchronously so observe after DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    observeRevealEls();

    // Re-observe after a tick in case JS components inject elements
    setTimeout(observeRevealEls, 100);
  });

  // ---- SMOOTH SCROLL for hash links ----
  document.addEventListener('click', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // ---- ANIMATE STAT COUNTERS in hero ----
  function animateCounters() {
    document.querySelectorAll('.hero__stats .stat strong').forEach(el => {
      const text = el.textContent.trim();
      el.style.opacity = '0';
      setTimeout(() => {
        el.style.transition = 'opacity 0.4s ease';
        el.style.opacity = '1';
      }, 600 + Math.random() * 400);
    });
  }
  document.addEventListener('DOMContentLoaded', animateCounters);

  // ---- CURSOR GLOW EFFECT (subtle) ----
  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed;
    width: 300px; height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(29,155,240,0.04), transparent 70%);
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 0;
    transition: transform 0.1s ease;
    top: 0; left: 0;
  `;
  document.body.appendChild(glow);

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    glow.style.left = mouseX + 'px';
    glow.style.top = mouseY + 'px';
  });

  // ---- ACTIVE NAV LINK ON SCROLL ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header__nav a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.style.color = 'var(--twitter)';
          }
        });
      }
    });
  }, { threshold: 0.4 });

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));
  });
})();
