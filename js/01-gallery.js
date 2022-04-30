
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
        <a class="gallery__link" href="large-image.jpg">
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

function handleModalOpen(source){
    const {create} = window.basicLightbox;
    const createTemplate = (src) => `<img class = "basicLightbox--img" src =" ${src}"/>`

    const instance = create(createTemplate(source));
    instance.visible();
    instance.show();
}

function handleGalleryClick (event) {
    event.preventDefault();
   const isGalleryItem = event.target.classList.contains('.gallery__item');

    if (!isGalleryItem){
        return;
    }
   return handleModalOpen(event.target.dataset.source) 
}

