/**
 * TRAVELBHARAT - MAIN APPLICATION SCRIPT (js/app.js)
 * Global interactions: sticky navigation, mobile drawer, stat counters, back-to-top.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Shadow on Scroll
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // 2. Mobile Menu Toggle & Drawer
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileClose = document.getElementById('mobileClose');

  function openMobileMenu() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (mobileOverlay) mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  // 3. Back to Top Button
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. Keyboard Shortcut Ctrl+K / Cmd+K for Search
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const heroSearch = document.getElementById('heroSearchInput');
      const navSearchBtn = document.getElementById('navSearchBtn');
      if (heroSearch) {
        heroSearch.focus();
        heroSearch.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (navSearchBtn) {
        window.location.href = 'search.html';
      }
    }
  });

  // 5. Animated Number Counter for Stats Banner
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10) || 0;
          const suffix = el.getAttribute('data-suffix') || '';
          let current = 0;
          const duration = 1200; // ms
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = Math.ceil(target / steps);

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.textContent = target + suffix;
              clearInterval(timer);
            } else {
              el.textContent = current + suffix;
            }
          }, stepTime);

          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    statNumbers.forEach(stat => counterObserver.observe(stat));
  }
});
