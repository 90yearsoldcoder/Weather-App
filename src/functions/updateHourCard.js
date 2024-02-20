import config from '../config';

const updateHourCard = () => {
  const { hourPageIndex } = config;
  const tag = `hourlyPage${hourPageIndex}`;

  const cards = document.querySelectorAll('#foreHourlyInfoCards .InfoCard');
  // console.log(cards);

  cards.forEach((card) => {
    if (card.classList.contains(tag)) card.classList.remove('hidden');
    else card.classList.add('hidden');
  });
};

export default updateHourCard;
