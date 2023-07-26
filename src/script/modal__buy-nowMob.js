(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-buynowMob-open]'),
    closeModalBtn: document.querySelector('[data-modal-buynowMob-close]'),
    modal: document.querySelector('[data-modalMob-buynow]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
//   можна використовувати атрибути або класи
