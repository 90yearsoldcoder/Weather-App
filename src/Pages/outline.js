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

  const foreContainer = document.createElement('div');
  foreContainer.id = 'foreContainer';
  foreContainer.classList.add('foreContainer');
  container.appendChild(foreContainer);

  return container;
};

export default outline;
