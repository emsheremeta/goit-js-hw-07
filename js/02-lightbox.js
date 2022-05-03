import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const addGalleryItems = document.querySelector('.gallery');
const galleryMarup = createGalleryItems (galleryItems);// хранит результат функции

addGalleryItems.insertAdjacentHTML("afterbegin", galleryMarup);
addGalleryItems.addEventListener("click", handleGalleryClick)

function createGalleryItems (galleryItems) {
    return galleryItems.map (({preview, original, description }) => {
        return `

      <a class="gallery__item" 
      href=""${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
      </a>
      `;
    })
    .join('');
  
};

function handleGalleryClick (event) {
    event.preventDefault();
   const isGalleryItem = event.target.classList.contains('gallery__image');
  
    if (!isGalleryItem){
        return;
    }
    
}
new SimpleLightbox('.gallery a', {
  showCounter: false,
  captionsData: 'alt',
  captionDelay: 250,
});