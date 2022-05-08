import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

// const gridPic = galleryItems.map((element) => {
//   let gridPicA = document.createElement("a");
//   gridPicA.classList.add("gallery__item");
//   gridPicA.setAttribute("href", element.original);

//   let gridPicImg = document.createElement("img");
//   gridPicImg.classList.add("gallery__image");
//   gridPicImg.setAttribute("src", element.preview);
//   gridPicImg.setAttribute("alt", element.description);

//   gridPicA.appendChild(gridPicImg);
//   gallery.appendChild(gridPicA);
// });
//

const gridPic = galleryItems
  .map(
    (element) =>
      `<a class="gallery__item" href="${element.original}">
      <img class="gallery__image"
       src="${element.preview}" 
       alt="${element.description}" />
       </a>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", gridPic);
console.log(gridPic);

const lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionDelay: 250,
});
