import { galleryItems } from "./gallery-items.js";
// Change code below this line

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

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName === "DIV") {
    return;
  }

  const instance = basicLightbox.create(
    `
      <img
        src="${event.target.dataset.source}"
        width="800" height="600"
      />`,
    {
      closable: true,
    }
  );

  instance.show();

  if (instance.show()) {
    window.addEventListener("keydown", (eve) => {
      if (eve.code === "Escape") {
        return instance.close();
      }
    });
  }
}

gallery.insertAdjacentHTML("beforeend", gridPic);
