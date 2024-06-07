
document.addEventListener('DOMContentLoaded', () => {
  // Select all buttons and images with the specified classes
  const buttons = document.querySelectorAll('.button');
  const images = document.querySelectorAll('.image');
  
  // Select the modal and its components
  const modal = document.getElementById('modal');           
  const modalImg = document.getElementById('fullsizeImage');
  const captionText = document.getElementById('caption');
  const closeModal = document.getElementsByClassName('close')[0];
  const thumbnailsContainer = document.getElementById('thumbnails');

  // Function to open the modal with the selected image and its details
  function openModal(imgGallery) {
    const img = imgGallery.querySelector('img');
    modal.style.display = "block"; // This will Display the modal
    modalImg.src = img.src; // this line will Set the modal image source
    captionText.innerHTML = imgGallery.querySelector('h3').textContent 
    + ' - ' + imgGallery.querySelector('small').textContent; // Set the caption text
    generateThumbnails(img.src); // Generate thumbnails for the modal
  }

  // Add click event listeners to all buttons to open the modal
  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      const imgGallery = event.target.closest('.image-details');
      openModal(imgGallery);
    });
  });

  // Add click event listeners to all images to open the modal
  images.forEach(image => {
    image.addEventListener('click', (event) => {
      const imgGallery = event.target.closest('.image-details');
      openModal(imgGallery);
    });
  });

  // Add click event listener to the close button to close the modal
  closeModal.addEventListener('click', () => {
    modal.style.display = "none"; // Hide the modal
    thumbnailsContainer.innerHTML = ''; // Clear thumbnails when modal is closed
  });

  // Add click event listener to the window to close the modal when clicking outside of it
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = "none"; // Hide the modal
      thumbnailsContainer.innerHTML = ''; // Clear thumbnails when modal is closed
    }
  });

  // Function to generate thumbnails for the modal
  function generateThumbnails(selectedImgSrc) {
    const thumbnails = document.querySelectorAll('.image-details img');
    thumbnailsContainer.innerHTML = ''; // Clear existing thumbnails
    thumbnails.forEach((thumb) => {
      const thumbnail = document.createElement('img');
      thumbnail.src = thumb.src; // Set thumbnail source
      thumbnail.alt = `Thumbnail`; // Set thumbnail alt text
      thumbnail.classList.add('thumbnail');
      if (thumb.src === selectedImgSrc) {
        thumbnail.classList.add('active-thumbnail'); // Highlight selected thumbnail
      }
      thumbnail.addEventListener('click', () => {
        modalImg.src = thumb.src; // Change modal image to clicked thumbnail
        document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active-thumbnail'));
        thumbnail.classList.add('active-thumbnail'); // Highlight clicked thumbnail
      });
      thumbnailsContainer.appendChild(thumbnail); // Append thumbnail to container
    });
  }
});
