// Add imports above this line
import { galleryItems } from './gallery-items';

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');


const createGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image"
     src="${preview}"
    alt="${description}" />
  </a>`;
  })
  .join('');

  galleryContainer.insertAdjacentHTML('beforeend', createGallery);

  var lightbox = new SimpleLightbox('.gallery a', { 

    captionsData: `alt`, 
    captionPosition:'bottom', 
    captionDelay: 250, 
    



});
