// Get references to DOM elements
const imageUrlInput = document.getElementById('image-url');
const addImageButton = document.getElementById('add-image');
const imageGallery = document.getElementById('image-gallery');

// Function to add a new image to the gallery
function addImage() {
  const imageUrl = imageUrlInput.value.trim();

  if (imageUrl !== "") {
    // Create a new div element for the image card
    const imageCard = document.createElement('div');
    imageCard.classList.add('image-card');

    // Create an img element and set its src attribute to the provided URL
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = "Image";

    // Create the "Remove" button
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-btn');

    // Add event listener to remove the image card when clicked
    removeButton.addEventListener('click', () => {
      imageCard.remove();
    });

    // Append the image and remove button to the card, and card to the gallery
    imageCard.appendChild(imgElement);
    imageCard.appendChild(removeButton);
    imageGallery.appendChild(imageCard);

    // Clear the input box
    imageUrlInput.value = "";
  } else {
    alert("Please enter a valid image URL");
  }
}

// Add an event listener to the "Add Image" button
addImageButton.addEventListener('click', addImage);

// Allow pressing 'Enter' key to also add image
imageUrlInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addImage();
  }
});
