(() => {
  const refs = {
    openMobileBtn: document.querySelector('.mobile-open-btn'),
    closeMobileBtn: document.querySelector('.mobile-close-btn'),
    mobile: document.querySelector('.mobile-menu'),
  };

  refs.openMobileBtn.addEventListener('click', toggleMobile);
  refs.closeMobileBtn.addEventListener('click', toggleMobile);

  function toggleMobile() {
    refs.mobile.classList.toggle('is-hidden');
  }
})();

//   можна використовувати  атрибути або класи
