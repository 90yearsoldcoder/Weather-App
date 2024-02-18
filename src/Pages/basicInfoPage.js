import '../Styles/basicInfoPage.css';

const basicInfoPage = (conditionText, temp, icon) => {
  const container = document.createElement('div');
  container.id = 'basicInfo';
  container.classList.add('basicInfo');

  const tempContainer = document.createElement('div');
  tempContainer.id = 'cur-temp';
  tempContainer.innerText = temp;
  container.appendChild(tempContainer);

  const condition = document.createElement('div');
  condition.id = 'cur-condition';
  condition.innerText = conditionText;
  container.appendChild(condition);

  const iconContainer = document.createElement('img');
  iconContainer.src = icon;
  iconContainer.id = 'cur-icon';
  container.appendChild(iconContainer);

  return container;
};

export default basicInfoPage;
