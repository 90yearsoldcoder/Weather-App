import '../Styles/foreInfoCard.css';
import { parseISO, format } from 'date-fns';
import parseIconURL from '../functions/parseIconURL';
import getIcon from '../functions/getIcon';
import config from '../config';

// rawdata is .hour.data
const foreInfoHourCard = (data, foreHourlyPageNum) => {
  const container = document.createElement('div');
  container.classList.add('InfoCard');
  container.classList.add(`${foreHourlyPageNum}`);

  const timeData = data.time;
  const parsedTime = parseISO(timeData);
  const formattedTime = format(parsedTime, 'HH:mm');
  // get condition
  const { condition } = data;
  // const conditionText = condition.text;
  // get the icon
  const iconNum = parseIconURL(condition.icon);
  const isDay = '1';
  const icon = getIcon(iconNum, isDay);
  // get the max_temp
  const unit = config.temperatureUnit;
  const tempNum = data[config[unit][0]];
  const temp = `${tempNum} ${unit}`;

  /*
  console.log(formattedDate);
  console.log(temp);
  console.log(conditionText);
  console.log(icon);
  */

  const time = document.createElement('div');
  time.classList.add('time');
  time.innerText = formattedTime;
  container.appendChild(time);

  const tempAvgDiv = document.createElement('div');
  tempAvgDiv.classList.add('tempAvgDiv');
  tempAvgDiv.innerText = temp;
  container.appendChild(tempAvgDiv);

  const iconTag = document.createElement('img');
  iconTag.classList.add('iconTag');
  iconTag.src = icon;
  container.appendChild(iconTag);

  return container;
};

export default foreInfoHourCard;
