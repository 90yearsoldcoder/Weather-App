import config from '../config';
import addInfoPage from '../Pages/addInfoPage';

// here the data is data['current']
const addInfoLoader = (data) => {
  const unit = config.temperatureUnit;
  const feelslikeNum = data[config[unit][1]];
  const feelsliketemp = `${feelslikeNum} ${unit}`;

  const humidNumber = data.humidity;
  const humidity = `${humidNumber} %`;

  const { uv } = data;

  const { windSpeedUnit } = config;
  const windSpeedNum = data[config[windSpeedUnit]];
  const windSpeed = `${windSpeedNum} ${windSpeedUnit}`;

  /*
  console.log(feelsliketemp);
  console.log(humidity);
  console.log(uv);
  console.log(windSpeed);
  */

  const addInfoContainer = document.querySelector('#addInfoContainer');
  const page = addInfoPage(feelsliketemp, humidity, uv, windSpeed);
  addInfoContainer.appendChild(page);
};

export default addInfoLoader;
