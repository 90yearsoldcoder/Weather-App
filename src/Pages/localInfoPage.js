import '../Styles/localInfoPage.css';

const localInfoPage = (data) => {
  const { name, country, localtime } = data.location;
  // console.log(name, country, localtime);

  const container = document.createElement('div');
  container.id = 'localInfoContainer';
  container.classList.add('localInfoContainer');

  const city = document.createElement('div');
  city.id = 'cityName';
  city.innerText = name;
  container.appendChild(city);

  const countryContainer = document.createElement('div');
  countryContainer.id = 'countryContainer';
  countryContainer.innerText = country;
  container.appendChild(countryContainer);

  const localtimeContainer = document.createElement('div');
  localtimeContainer.id = 'localtimeContainer';
  localtimeContainer.innerText = localtime;
  container.appendChild(localtimeContainer);

  return container;
};

export default localInfoPage;
