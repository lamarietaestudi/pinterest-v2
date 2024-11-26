import './cards.css';

export function createCard(image) {
  const card = document.createElement('div');
  const imageContainer = document.createElement('img');
  const profileContainer = document.createElement('div');
  const profileImage = document.createElement('img');
  const profileName = document.createElement('p');
  const publicationInfo = document.createElement('div');
  const datePublication = document.createElement('p');
  const uploadIcon = document.createElement('img');
  const visitButton = document.createElement('button');
  const iconLikes = document.createElement('div');
  const likesImage = document.createElement('img');
  const likesText = document.createElement('p');
  const iconCamera = document.createElement('div');
  const cameraImage = document.createElement('img');
  const cameraText = document.createElement('p');

  imageContainer.src = image.urls.regular;
  imageContainer.alt = image.alt_description;
  profileImage.src = image.user.profile_image.medium;
  profileImage.style.borderColor = image.color;
  profileImage.alt = image.user.name;
  profileName.textContent = image.user.name;
  datePublication.textContent = new Date(image.created_at).toLocaleDateString();
  uploadIcon.src = './assets/icon-upload.svg';
  uploadIcon.alt = 'fecha de publicación';
  visitButton.textContent = 'Visitar';
  likesImage.src = './assets/icon-heart.svg';
  likesImage.alt = 'likes';
  likesText.textContent = `${image.likes}`;
  cameraImage.src = './assets/icon-camera.svg';
  cameraImage.alt = 'cámara';
  cameraText.textContent = '+' + `${image.user.total_photos}`;

  card.className = 'card';
  imageContainer.className = 'imagecontent';
  profileContainer.className = 'profilecontainer';
  profileImage.className = 'profileimage';
  publicationInfo.className = 'publicationinfo';
  visitButton.className = 'visitbutton';
  iconLikes.className = 'card-icon likes';
  iconCamera.className = 'card-icon camera';

  visitButton.addEventListener('click', () => {
    window.open(image.links.html, '_blank');
  });

  publicationInfo.append(uploadIcon, datePublication);
  iconLikes.append(likesImage, likesText);
  iconCamera.append(cameraImage, cameraText);
  profileContainer.append(profileImage, profileName, publicationInfo);
  card.append(
    imageContainer,
    profileContainer,
    iconLikes,
    iconCamera,
    visitButton
  );

  return card;
}
//? A pesar de que no es necesaria, prefiero guardar esta función por si me sirve en el futuro.
// export function specialCards(image) {
//   const card = createCard(image);

// const visitButton = document.createElement('button');
// visitButton.textContent = 'Visitar';
// visitButton.className = 'visitbutton';
// visitButton.addEventListener('click', () => {
//   window.open(image.links.html, '_blank');
// });

// const iconLikes = document.createElement('div');
// iconLikes.className = 'card-icon likes';

// const likesImage = document.createElement('img');
// likesImage.src = './assets/icon-heart.svg';
// likesImage.alt = 'likes';

// const likesText = document.createElement('p');

// iconLikes.append(likesImage, likesText);

// const iconCamera = document.createElement('div');
// iconCamera.className = 'card-icon camera';

// const cameraImage = document.createElement('img');
// cameraImage.src = './assets/icon-camera.svg';
// cameraImage.alt = 'cámara';

// const cameraText = document.createElement('p');
// cameraText.textContent = '+' + `${image.user.total_photos}`;

// iconCamera.append(cameraImage, cameraText);
// card.append(iconLikes, iconCamera, visitButton);
//   return card;
// }

export function printCards(images) {
  const publicationsContainer = document.getElementById('app');
  publicationsContainer.innerText = '';

  images.forEach((image) => {
    const card = createCard(image);
    publicationsContainer.append(card);
  });
}
