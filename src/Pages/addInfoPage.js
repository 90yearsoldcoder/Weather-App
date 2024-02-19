import humidityImg from '../assets/humidity.svg';
import sunImg from '../assets/sun.svg';
import theromImg from '../assets/thermo.svg';
import windImg from '../assets/wind.svg';
import '../Styles/addInfoPage.css';

const addDetail = (icon, txt, align) => {
  const detail = document.createElement('div');
  detail.classList.add('detail');

  const icon1 = document.createElement('img');
  icon1.src = icon;
  detail.append(icon1);

  const text = document.createElement('div');
  text.classList.add('detail-txt');

  const textTitle = document.createElement('h1');
  textTitle.innerText = align;
  text.appendChild(textTitle);

  const textTxt = document.createElement('p');
  textTxt.innerText = txt;
  text.appendChild(textTxt);

  detail.append(text);

  return detail;
};

const addInfoPage = (feelsliketemp, humidity, uv, windSpeed) => {
  const container = document.createElement('div');
  container.classList.add('addInfo');
  container.id = 'addInfo';

  const d1 = addDetail(theromImg, feelsliketemp, 'Feels Like');
  container.appendChild(d1);

  const d2 = addDetail(humidityImg, humidity, 'Humidity');
  container.appendChild(d2);

  const d3 = addDetail(sunImg, uv, 'UV');
  container.appendChild(d3);

  const d4 = addDetail(windImg, windSpeed, 'Wind Speed');
  container.appendChild(d4);

  return container;
};

export default addInfoPage;
