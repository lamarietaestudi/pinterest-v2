import './buttons.css';

export const categoriesMenu = ['Inicio', 'Explorar', 'Crear'];

export function createButton(category, classItem, isActive = false) {
  const button = document.createElement('button');
  button.textContent = category;
  button.className = classItem;
  if (isActive) {
    button.classList.add('active');
  }
  button.addEventListener('click', () => toggleActiveButton(button));
  return button;
}
function toggleActiveButton(clickedButton) {
  const buttons = document.querySelectorAll('.buttonsmenu > button');
  buttons.forEach((button) => button.classList.remove('active'));
  clickedButton.classList.add('active');
}
