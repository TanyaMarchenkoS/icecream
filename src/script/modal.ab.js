(() => {
  const refs = {
    openModalBtn: document.querySelector('.about__button'),
    closeModalBtn: document.querySelector('.modal-button'),
    modal: document.querySelector('.about-modal'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
