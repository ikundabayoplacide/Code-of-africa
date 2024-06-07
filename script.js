document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button');
  const images = document.querySelectorAll('.image');
  const modal = document.getElementById('modal');           // those are script to allow js access html data 
  const modalImg = document.getElementById('fullsizeImage');
  const captionText = document.getElementById('caption');
  const closeModal = document.getElementsByClassName('close')[0];
  const thumbnailsContainer = document.getElementById('thumbnails');

  function openModal(imgGallery) {
    const img = imgGallery.querySelector('img');
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = imgGallery.querySelector('h3').textContent 
    + ' - ' + imgGallery.querySelector('small').textContent;
    generateThumbnails(img.src); // Generate thumbnails
  }

  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      const imgGallery = event.target.closest('.image-details');
      openModal(imgGallery);
    });
  });

  images.forEach(image => {
    image.addEventListener('click', (event) => {
      const imgGallery = event.target.closest('.image-details');
      openModal(imgGallery);
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = "none";
    thumbnailsContainer.innerHTML = ''; // Clear thumbnails when modal is closed
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      thumbnailsContainer.innerHTML = ''; // Clear thumbnails when modal is closed
    }
  });

  function generateThumbnails(selectedImgSrc) {
    const thumbnails = document.querySelectorAll('.image-details img');
    thumbnailsContainer.innerHTML = ''; // Clear existing thumbnails
    thumbnails.forEach((thumb) => {
      const thumbnail = document.createElement('img');
      thumbnail.src = thumb.src;
      thumbnail.alt = `Thumbnail`;
      thumbnail.classList.add('thumbnail');
      if (thumb.src === selectedImgSrc) {
        thumbnail.classList.add('active-thumbnail'); // Highlight selected thumbnail
      }
      thumbnail.addEventListener('click', () => {
        modalImg.src = thumb.src;
        document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active-thumbnail'));
        thumbnail.classList.add('active-thumbnail'); // Highlight clicked thumbnail
      });
      thumbnailsContainer.appendChild(thumbnail);
    });
  }
});
