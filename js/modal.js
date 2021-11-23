(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal, false);
  refs.closeModalBtn.addEventListener("click", toggleModal, false);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();