import '../Styles/foreControlerPage.css';
import arrLeftIcon from '../assets/arrow_left.svg';
import arrRightIcon from '../assets/arrow_right.svg';

const generateDot = (dotId) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.id = dotId;

  return dot;
};

const foreControler = () => {
  const controlerContainer = document.createElement('div');
  controlerContainer.classList.add('controlerContainer');

  const switchDayHour = document.createElement('div');
  switchDayHour.classList.add('switchDayHour');
  controlerContainer.appendChild(switchDayHour);

  const switchDay = document.createElement('div');
  switchDay.id = 'switchDay';
  switchDay.innerText = 'Daily';
  switchDay.classList.add('switch-ON');
  switchDayHour.append(switchDay);
  switchDay.addEventListener('click', (e) => {
    e.target.classList.add('switch-ON');
    const switch2 = switchDayHour.querySelector('#switchHour');
    switch2.classList.remove('switch-ON');

    const cardsContainer1 = document.querySelector('#foreDayInfoCards');
    cardsContainer1.classList.remove('hidden');
    const cardsContainer2 = document.querySelector('#foreHourlyInfoCards');
    cardsContainer2.classList.add('hidden');
    const pageConroller = document.querySelector('#pageConroller');
    pageConroller.classList.add('hidden');
  });

  const switchHour = document.createElement('div');
  switchHour.id = 'switchHour';
  switchHour.innerText = 'Hourly';
  switchDayHour.append(switchHour);
  switchHour.addEventListener('click', (e) => {
    e.target.classList.add('switch-ON');
    const switch2 = switchDayHour.querySelector('#switchDay');
    switch2.classList.remove('switch-ON');

    const cardsContainer1 = document.querySelector('#foreHourlyInfoCards');
    cardsContainer1.classList.remove('hidden');
    const cardsContainer2 = document.querySelector('#foreDayInfoCards');
    cardsContainer2.classList.add('hidden');
    const pageConroller = document.querySelector('#pageConroller');
    pageConroller.classList.remove('hidden');
  });

  // page controller
  const pageConroller = document.createElement('div');
  pageConroller.id = 'pageConroller';
  pageConroller.classList.add('pageConroller');
  pageConroller.classList.add('hidden');
  controlerContainer.appendChild(pageConroller);

  const arrLeft = document.createElement('img');
  arrLeft.classList.add('arrIcon');
  arrLeft.src = arrLeftIcon;
  pageConroller.appendChild(arrLeft);

  pageConroller.appendChild(generateDot('dot0'));
  pageConroller.appendChild(generateDot('dot1'));
  pageConroller.appendChild(generateDot('dot2'));

  const arrRight = document.createElement('img');
  arrRight.classList.add('arrIcon');
  arrRight.src = arrRightIcon;
  pageConroller.appendChild(arrRight);

  return controlerContainer;
};

export default foreControler;
