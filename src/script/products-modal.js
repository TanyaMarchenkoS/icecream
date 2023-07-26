// modal crem
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-crem-open]'),
    closeModalBtn: document.querySelector('[data-modal-crem-close]'),
    modal: document.querySelector('[data-modal-crem]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

//modal coffe
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-coffee-open]'),
    closeModalBtn: document.querySelector('[data-modal-coffee-close]'),
    modal: document.querySelector('[data-modal-coffe]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

//modal milk 
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-milk-open]'),
    closeModalBtn: document.querySelector('[data-modal-milk-close]'),
    modal: document.querySelector('[data-milk]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

