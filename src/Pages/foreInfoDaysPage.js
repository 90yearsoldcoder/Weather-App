import foreInfoCard from './foreInfoCard';
import '../Styles/foreInfo.css';

const foreInfoDaysPage = (data) => {
  const foreDayInfoCards = document.createElement('div');
  foreDayInfoCards.id = 'foreDayInfoCards';
  foreDayInfoCards.classList.add('foreDayInfoCards');

  Object.values(data).forEach((item) => {
    console.log(item.date);
    foreDayInfoCards.appendChild(foreInfoCard(item));
  });

  return foreDayInfoCards;
};

export default foreInfoDaysPage;
