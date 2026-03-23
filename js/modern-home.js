// Animate signup box on load
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.signup-container-home')?.classList.add('modern-signup-animate');
  }, 400);
});
// Dynamically set navbar color based on scroll position and diagonal
window.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  function updateNavbarBg() {
    const scrollY = window.scrollY;
    // If near top, use purple if over purple diagonal
    if (scrollY < 180) {
      navbar.classList.add('bg-purple');
    } else {
      navbar.classList.remove('bg-purple');
    }
  }
  updateNavbarBg();
  window.addEventListener('scroll', updateNavbarBg);
});
// modern-home.js
// Animations and interactivity for Student Performance Tracker homepage
// Author: Your Name
// Date: 2026

// Animate progress bar on load
window.addEventListener('DOMContentLoaded', () => {
  const progress = document.querySelector('.progress-bar');
  if (progress) {
    setTimeout(() => {
      progress.style.width = '82%'; // Example: 82% marks
    }, 400);
  }
});

// Animate diagonal split transition, then show heading and definition
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.diagonal-bg')?.classList.add('show');
    setTimeout(() => {
      document.querySelector('.hero-purple-block')?.classList.remove('hidden-hero-text');
      document.querySelector('.hero-purple-block')?.classList.add('show-hero-text');
    }, 500);
  }, 200);
});

// Fade out on navigation
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#') || this.getAttribute('target')) return;
    e.preventDefault();
    document.body.style.transition = 'opacity 0.5s';
    document.body.style.opacity = 0;
    setTimeout(() => {
      window.location.href = this.getAttribute('href');
    }, 500);
  });
});
