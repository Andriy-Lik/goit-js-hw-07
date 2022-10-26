import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const tagContainer = document.querySelector('.gallery');
const cardsMarkup = createImagesCardsMarkup(galleryItems);
tagContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createImagesCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li>
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `;
    }).join('');    
}

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});

gallery.on('show.simplelightbox', function () {
	// do something…
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e);
});
