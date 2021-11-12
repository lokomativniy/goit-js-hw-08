import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const gallaryNode = document.querySelector(".gallery");

const newGallery = galleryItems
  .map(
    (element) =>
      `<a class="gallery__item"
   href="${element.original}">
  <img class="gallery__image"
  src="${element.preview}" 
  alt="${element.description}" />
</a>`
  )
  .join("");

gallaryNode.insertAdjacentHTML("beforeend", newGallery);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
console.log(galleryItems);