document.addEventListener('DOMContentLoaded', () => {

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = mobileMenu.querySelectorAll('a');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  const header = document.getElementById('main-header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      if (lastScrollY < window.scrollY) {
        header.classList.add('-translate-y-full');
      } else {
        header.classList.remove('-translate-y-full');
      }
    } else {
      header.classList.remove('-translate-y-full');
    }
    lastScrollY = window.scrollY;
  });

  const openModalBtn = document.getElementById('open-privacy-modal');
  const closeModalBtn = document.getElementById('close-privacy-modal');
  const modal = document.getElementById('privacy-modal');

  openModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });

  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  closeModalBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});