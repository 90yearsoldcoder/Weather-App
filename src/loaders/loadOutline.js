import outline from '../Pages/outline';

const loadOutline = () => {
  const body = document.querySelector('body');
  body.appendChild(outline());
};

export default loadOutline;
