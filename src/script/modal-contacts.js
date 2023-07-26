// modal-location

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-location-open]'),
    closeModalBtn: document.querySelector('[data-modal-location-close]'),
    modal: document.querySelector('[data-location]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

//   modal-franchise

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-franchise-open]'),
    closeModalBtn: document.querySelector('[data-modal-franchise-close]'),
    modal: document.querySelector('[data-franchise]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
//   можна використовувати атрибути або класи
