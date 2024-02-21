import '../Styles/foreInfo.css';
import foreInfoHourCard from './foreInfoHourCard';

const foreInfoHourlyPage = (data) => {
  const foreHourlyInfoCards = document.createElement('div');
  foreHourlyInfoCards.id = 'foreHourlyInfoCards';
  foreHourlyInfoCards.classList.add('foreDayInfoCards');
  foreHourlyInfoCards.classList.add('hidden');

  const dataHours = data.hour;
  let index = -1;
  Object.values(dataHours).forEach((item) => {
    // console.log(item);
    index += 1;
    const page = `hourlyPage${Math.floor(index / 8)}`;
    // console.log(page);
    foreHourlyInfoCards.appendChild(foreInfoHourCard(item, page));
  });

  return foreHourlyInfoCards;
};

export default foreInfoHourlyPage;
