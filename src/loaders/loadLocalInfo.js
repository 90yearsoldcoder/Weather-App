import remove from '../functions/remove';
import localInfoPage from '../Pages/localInfoPage';

const loadLocalInfo = (data) => {
  // remove previous content
  remove('locInfoContainer');

  const container = document.querySelector('#centreContainer');
  remove('localInfoContainer');
  container.appendChild(localInfoPage(data));
};

export default loadLocalInfo;
