import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divRef = document.querySelector(".gallery");
function creatgalleryMarkup(items) {
  return items
    .map(
      (item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" 
         src="${item.preview}" data-source="${item.original}" 
         alt="${item.description}" />
      </a>
    </li>
  `
    )
    .join("");
}
const addGallary = creatgalleryMarkup(galleryItems);
divRef.innerHTML = addGallary;
divRef.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
  <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  divRef.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
