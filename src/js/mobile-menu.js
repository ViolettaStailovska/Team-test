(() => {
    const refs = {
      openBtn: document.querySelector('[data-mobile-menu-open]'),
      closeBtn: document.querySelector('[data-mobile-menu-close]'),
      mob: document.querySelector('[data-mobile-menu]'),
      mobileMenuLinks: document.querySelectorAll('.mobile-menu__link'),
    };
  
    refs.openBtn.addEventListener('click', toggleMobile);
    refs.closeBtn.addEventListener('click', toggleMobile);
    refs.mobileMenuLinks.forEach(link => {
      link.addEventListener('click', toggleMobile);
    });
    function toggleMobile() {
      refs.mob.classList.toggle('mobile-menu__show');
    }
  })();