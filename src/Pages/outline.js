import background from '../assets/background.jpg';
import '../Styles/outline.css';

const outline = () => {
  const container = document.createElement('div');
  container.classList.add('main');
  container.style.backgroundImage = `url(${background})`;
  container.style.backgroundRepeat = 'no-repeat';
  container.style.backgroundSize = 'cover';
  container.style.backgroundPosition = 'center';

  return container;
};

export default outline;
