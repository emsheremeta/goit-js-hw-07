
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// зарендерить все 
const addGalleryItems = document.querySelector('.gallery');
const galleryMarup = createGalleryItems (galleryItems);// хранит результат функции

addGalleryItems.insertAdjacentHTML("afterbegin", galleryMarup);
addGalleryItems.addEventListener("click", handleGalleryClick)

function createGalleryItems (galleryItems) {
    return galleryItems.map (({preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
      `;
    })
    .join('');
  
};

const instance = basicLightbox.create (
  `<img class="modal-img" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener('keydown', handleModalClose);
  },
  },
  {
    onClose: (instance) => {
      window.removeEventListener ('keydown',handleModalClose);
  }
  },
  
);

function handleGalleryClick (event) {
  event.preventDefault();
 if ( event.target.nodeName !== 'IMG'){
   return
 }
 instance.element().querySelector('.modal-img').src = event.target.dataset.source;

  instance.show();
}

function handleModalClose (event) {
  if (event.key === 'Escape'){
    console.log ('key : ', event.key);
    console.log('code: ', event.code)
    instance.close();
    return;
    
  }
}

