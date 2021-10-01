// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const divGallery = document.querySelector('.gallery');

const markUp = galleryItems
  .map(
    image =>
      `
        <a class="gallery__item" href="${image.original}">
            <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
        </a>
        `,
  )
  .join('');

divGallery.insertAdjacentHTML('beforeend', markUp);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
