import background from '../assets/background.jpg';
import '../Styles/outline.css';

const outline = () => {
  const container = document.createElement('div');
  container.classList.add('main');
  container.style.backgroundImage = `url(${background})`;
  container.style.backgroundRepeat = 'no-repeat';
  container.style.backgroundSize = 'cover';
  container.style.backgroundPosition = 'center';

  const currentContainer = document.createElement('div');
  currentContainer.id = 'currentContainer';
  currentContainer.classList.add('currentContainer');
  container.appendChild(currentContainer);
  // basic info container
  const basicInfoContainer = document.createElement('div');
  basicInfoContainer.id = 'basicInfoContainer';
  basicInfoContainer.classList.add('InfoContainer');
  currentContainer.appendChild(basicInfoContainer);
  // centre container
  const centreContainer = document.createElement('div');
  centreContainer.id = 'centreContainer';
  centreContainer.classList.add('InfoContainer');
  currentContainer.appendChild(centreContainer);
  // addional infor container
  const addInfoContainer = document.createElement('div');
  addInfoContainer.id = 'addInfoContainer';
  addInfoContainer.classList.add('InfoContainer');
  currentContainer.appendChild(addInfoContainer);

  const foreContainer = document.createElement('div');
  foreContainer.id = 'foreContainer';
  foreContainer.classList.add('foreContainer');
  container.appendChild(foreContainer);

  return container;
};

export default outline;
