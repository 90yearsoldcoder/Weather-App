import config from '../config';
import parseIconURL from '../functions/parseIconURL';
import getIcon from '../functions/getIcon';
import basicInfoPage from '../Pages/basicInfoPage';
import clear from '../functions/clear';

// here the data is data['current']
const basicInfoLoader = (data) => {
  const { condition } = data;
  const conditionText = condition.text;
  const iconNum = parseIconURL(condition.icon);
  const isDay = data.is_day;
  const icon = getIcon(iconNum, isDay);

  const unit = config.temperatureUnit;
  const tempNum = data[config[unit][0]];
  const temp = `${tempNum} ${unit}`;

  /*
  console.log(temp);
  console.log(conditionText);
  console.log(icon);
  */

  const basicInfoContainer = document.querySelector('#basicInfoContainer');
  clear('basicInfoContainer');
  const basicInfo = basicInfoPage(conditionText, temp, icon);
  basicInfoContainer.appendChild(basicInfo);
};

export default basicInfoLoader;
