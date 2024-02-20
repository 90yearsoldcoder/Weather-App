import '../Styles/foreInfoCard.css';
import { parseISO, format } from 'date-fns';
import parseIconURL from '../functions/parseIconURL';
import getIcon from '../functions/getIcon';
import config from '../config';

// rawdata is .day
const foreInfoCard = (rawdata) => {
  const container = document.createElement('div');
  container.classList.add('InfoCard');

  const data = rawdata.day;
  const { date } = rawdata;
  const parsedDate = parseISO(date);
  const formattedDate = format(parsedDate, 'MMM. d');
  // get condition
  const { condition } = data;
  // const conditionText = condition.text;
  // get the icon
  const iconNum = parseIconURL(condition.icon);
  const isDay = '1';
  const icon = getIcon(iconNum, isDay);
  // get the max_temp
  const unit = config.temperatureUnit;
  const tempMaxNum = data[config[unit][3]];
  const tempMax = `${tempMaxNum} ${unit}`;
  // get the min_temp
  const tempMinNum = data[config[unit][4]];
  const tempMin = `${tempMinNum} ${unit}`;
  // combine to temp range
  const tempRange = `${tempMin} - ${tempMax}`;
  // get the average temp
  const tempAvgNum = data[config[unit][2]];
  const tempAvg = `${tempAvgNum} ${unit}`;

  /*
  console.log(formattedDate);
  console.log(tempAvg);
  console.log(tempRange);
  console.log(conditionText);
  console.log(icon);
  */

  const time = document.createElement('div');
  time.classList.add('time');
  time.innerText = formattedDate;
  container.appendChild(time);

  const tempAvgDiv = document.createElement('div');
  tempAvgDiv.classList.add('tempAvgDiv');
  tempAvgDiv.innerText = tempAvg;
  container.appendChild(tempAvgDiv);

  const tempRangeDiv = document.createElement('div');
  tempRangeDiv.classList.add('tempRangeDiv');
  tempRangeDiv.innerText = tempRange;
  container.appendChild(tempRangeDiv);

  const iconTag = document.createElement('img');
  iconTag.classList.add('iconTag');
  iconTag.src = icon;
  container.appendChild(iconTag);

  return container;
};

export default foreInfoCard;
