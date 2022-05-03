import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const gridPic = galleryItems
  .map(
    (element) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${element.original}">
            <img
                class="gallery__image"
                src="${element.preview}"
                data-source="${element.original}"
                alt="${element.description}"
            />
         </a>
    </div>`
  )
  .join("");

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  //   console.log(event.target);
  //   console.dir(event.target);
  const instance = basicLightbox.create(`
      <img
        src="${event.target.dataset.source}"
        alt="${gridPic.description}"
        width="800" height="600"
      />`);

  instance.show();
});

// const instance = basicLightbox.create(document.querySelector(".data-source"));

gallery.insertAdjacentHTML("beforeend", gridPic);
// console.log(gridPic);
