const imageModal = document.getElementById('imageModal');
imageModal.addEventListener('show.bs.modal', function (event) {
  const button = event.relatedTarget;
  const image = button.getAttribute('data-bs-src');
  const modalImage = imageModal.querySelector('#modal-image');
  modalImage.src = image;
})
