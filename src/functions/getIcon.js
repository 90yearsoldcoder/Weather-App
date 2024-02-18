import icons from '../assets/assets';

const getIcon = (num, isDay) => {
  if (isDay === '1') return icons.day[num];
  return icons.night[num];
};

export default getIcon;
