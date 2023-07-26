(() => {
  const toTopBtn = document.querySelector('.button-to-top');
  const mobile = document.querySelector('.mobile-menu');

  window.addEventListener('scroll', function (e) {
    if (window.pageYOffset > 300) {
      toTopBtn.style.display = 'flex';
      mobile.classList.add('is-hidden');
    } else {
      toTopBtn.style.display = 'none';
    }
  });
})();
