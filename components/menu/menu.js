import './menu.css';

import { createButton, categoriesMenu } from '../buttons/buttons.js';
import { searchImages } from '../../main.js';

export function clearSearchInput() {
  const txtSearchBar = document.querySelector('.txtsearchbar');
  if (txtSearchBar) {
    txtSearchBar.value = '';
  }
  const existingMessage = document.querySelector('.imagenotfound');
  if (existingMessage) {
    existingMessage.remove();
  }
}

function executeSearch(keyword) {
  clearSearchInput();
  if (keyword.trim()) {
    searchImages(keyword.trim());
  } else {
    console.warn('El campo está vacío. Se realizará una búsqueda aleatoria.');
    searchImages('random');
  }
}

export const createMenu = () => {
  const topMenu = document.createElement('div');
  const logoMenu = document.createElement('img');
  const buttonsMenu = document.createElement('nav');
  const searchBar = document.createElement('div');
  const iconSearchBar = document.createElement('img');
  const txtSearchBar = document.createElement('input');
  const iconsMenu = document.createElement('div');
  const iconMenuRing = document.createElement('img');
  const iconMenuChat = document.createElement('img');
  const iconMenuProfile = document.createElement('img');

  topMenu.append(logoMenu, buttonsMenu, searchBar, iconsMenu);
  categoriesMenu.forEach((category, index) => {
    const button = createButton(category, 'buttonsmenu');
    if (index === 0) {
      button.classList.add('active');
    }
    buttonsMenu.append(button);
  });
  searchBar.append(iconSearchBar, txtSearchBar);
  iconsMenu.append(iconMenuRing, iconMenuChat, iconMenuProfile);

  logoMenu.src = './assets/pinterest-logo.svg';
  logoMenu.alt = 'logo pinterest';
  iconSearchBar.src = './assets/icon-lupa.png';
  iconSearchBar.alt = 'icono de lupa';
  txtSearchBar.type = 'text';
  txtSearchBar.placeholder = 'Buscar';
  iconMenuRing.src = './assets/icon-ring.svg';
  iconMenuRing.alt = 'icono de notificaciones';
  iconMenuChat.src = './assets/icon-chat.svg';
  iconMenuChat.alt = 'icono de mensajes';
  iconMenuProfile.src = './assets/icon-profile.svg';
  iconMenuProfile.alt = ' icono perfil usuario';

  logoMenu.addEventListener('click', () => {
    clearSearchInput();
    searchImages('random');
  });

  iconSearchBar.addEventListener('click', () => {
    executeSearch(txtSearchBar.value);
  });

  txtSearchBar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      executeSearch(txtSearchBar.value);
    }
  });

  topMenu.className = 'topmenu';
  logoMenu.className = 'logomenu';
  buttonsMenu.className = 'buttonsmenu';
  searchBar.className = 'searchbar';
  txtSearchBar.className = 'txtsearchbar';
  iconsMenu.className = 'iconsmenu';
  iconSearchBar.className = 'iconsearchbar';

  return topMenu;
};
