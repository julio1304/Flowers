const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
});
let index = 0;
const imagesPerSet = 3;

 
const images = [
  'Images/3d7c2a3f-2e77-42e1-b94e-28e270751620.jpg',
  'Images/photo_5839027620124146139_y.jpg',
  'Images/photo_5839027620124146142_y.jpg',
  'Images/68acffd8-8b46-42ae-a5de-0ddd1eb3146f.jpg',
  'Images/723bb5a0-e270-49fd-ab81-1080d99f7f3e.jpg',
  'Images/photo_5222008834514610613_y.jpg',
];

 

function updateGallery() {
  const galleryContainer = document.getElementById('gallery-container');
  if (!galleryContainer) return;

  galleryContainer.innerHTML = '';

  const slider = document.createElement('div');
  slider.classList.add('gallery-slider');

  for (let i = 0; i < imagesPerSet; i++) {
    const img = document.createElement('img');
    img.src = images[(index + i) % images.length];
    img.alt = `Gallery Image ${index + i + 1}`;
    img.classList.add('gallery-image');
    slider.appendChild(img);
  }

  // Add the same set of images again to create a seamless loop
  for (let i = 0; i < imagesPerSet; i++) {
    const img = document.createElement('img');
    img.src = images[(index + i) % images.length];
    img.alt = `Gallery Image ${index + i + 1}`;
    img.classList.add('gallery-image');
    slider.appendChild(img);
  }

  galleryContainer.appendChild(slider);

  // Update index for the next set of images
  index = (index + imagesPerSet) % images.length;
}

window.addEventListener('load', updateGallery);
const testimonialContainer = document.getElementById('testimonial-container');
const testimonialImages = [
  'Images/photo_5839027620124146139_y.jpg',
  'Images/photo_5839027620124146142_y.jpg',
  'Images/photo_5839027620124146143_y.jpg',
];
const testimonialTexts = [
  '"Amazing floral arrangements! The perfect choice for every occasion." - Customer 1',
  '"The flowers were so fresh and beautiful! Highly recommend." - Customer 2',
  '"Absolutely loved the service and the stunning bouquets!" - Customer 3',
];

let testimonialIndex = 0;

function updateTestimonial() {
  const image = document.createElement('img');
  image.src = testimonialImages[testimonialIndex];
  image.alt = `Testimonial Image ${testimonialIndex + 1}`;
  image.classList.add('testimonial-image');

  const text = document.createElement('div');
  text.classList.add('testimonial-text');
  text.innerHTML = testimonialTexts[testimonialIndex];

  // Fade out the previous content
  const previousImage = testimonialContainer.querySelector('img');
  const previousText = testimonialContainer.querySelector('.testimonial-text');
  if (previousImage) previousImage.classList.add('fade');
  if (previousText) previousText.classList.add('fade');

  // Wait for the opacity transition to finish before updating the content
  setTimeout(() => {
    // Clear previous content
    testimonialContainer.innerHTML = '';

    // Append new image and text
    testimonialContainer.appendChild(image);
    testimonialContainer.appendChild(text);

    // Move to the next testimonial index
    testimonialIndex = (testimonialIndex + 1) % testimonialImages.length;
  }, 1000); // Delay to match the opacity transition time (1s)
}

// Set the interval to switch images every 5 seconds (5000ms)
setInterval(updateTestimonial, 5000);

// Call once on load to display the first testimonial
window.addEventListener('load', updateTestimonial);
