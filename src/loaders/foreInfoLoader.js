import clear from '../functions/clear';
import foreInfoDaysPage from '../Pages/foreInfoDaysPage';
import foreInfoHourlyPage from '../Pages/foreInfoHourlyPage';
import foreControler from '../Pages/foreControler';
import updateHourCard from '../functions/updateHourCard';

// data: .forecast.forecastday
const foreInfoLoader = (data) => {
  const foreContainer = document.querySelector('#foreContainer');
  clear(foreContainer.id);

  const daysData = data.slice(1);
  const hoursData = data[0];
  foreContainer.appendChild(foreControler());
  foreContainer.appendChild(foreInfoDaysPage(daysData));
  foreContainer.appendChild(foreInfoHourlyPage(hoursData));
  updateHourCard();
};

export default foreInfoLoader;
