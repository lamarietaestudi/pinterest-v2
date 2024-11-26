import './components/buttons/buttons.js';
import './components/cards/cards.js';
import './components/menu/menu.js';
import { createMenu, clearSearchInput } from './components/menu/menu.js';
import { printCards } from './components/cards/cards.js';

document.body.prepend(createMenu());

export function searchImages(keyword = 'random') {
  const existingMessage = document.querySelector('.imagenotfound');
  if (existingMessage) {
    existingMessage.remove();
  }
  fetch(
    `https://api.unsplash.com/photos/random?&query=${keyword}&count=20&client_id=JfaKhxkc-mGi7UsF6hdNiy0HF0451Uoz5EKIvEUcqBc`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error de búsqueda`);
      }
      return response.json();
    })
    .then((images) => {
      if (Array.isArray(images) && images.length > 0) {
        printCards(images);
      } else {
        insertMessageError();
        if (keyword !== 'gatos') {
          searchImages('gatos');
        }
      }
      clearSearchInput();
    })
    .catch((error) => {
      console.error('Error en la búsqueda.', error);
      insertMessageError();
    });
}

function insertMessageError() {
  const message = document.createElement('div');
  message.className = 'imagenotfound';
  message.innerHTML =
    'No hay coincidencias, prueba con otra búsqueda. Mientras, aquí te mostramos algunos lindos gatitos.';
  const appContainer = document.querySelector('#app');
  appContainer.insertAdjacentElement('beforebegin', message);
}

searchImages('random');
