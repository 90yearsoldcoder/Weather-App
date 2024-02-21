import '../Styles/searchBar.css';
import searchPic from '../assets/search-icon.png';
import WealtherAPI from '../APIfunctions/wealtherAPI';
import basicInfoLoader from './basicInfoLoader';
import addInfoLoader from './addInfoLoader';
import foreInfoLoader from './foreInfoLoader';
import loadLocalInfo from './loadLocalInfo';

const loadSearchBar = () => {
  const searchBarContainer = document.createElement('div');
  searchBarContainer.classList.add('searchBarContainer');

  searchBarContainer.innerHTML = `
  <input class="searchBar-input" id="search-city" placeholder="Location..City,ZIP">
    <div class="search_icon"></div>
  `;

  const searchIcon = searchBarContainer.querySelector('.search_icon');
  searchIcon.style.backgroundImage = `url(${searchPic})`;

  const centreContainer = document.querySelector('#centreContainer');
  centreContainer.appendChild(searchBarContainer);

  // Todo: add listener to search icon
  searchIcon.addEventListener('click', () => {
    const input = document.getElementById('search-city');
    const city = document.getElementById('search-city').value.trim();

    if (city === '') {
      // Set a custom validation message
      input.setCustomValidity('This field cannot be left blank');

      // Report to the user
      input.reportValidity();
      return null;
    }

    input.setCustomValidity('');
    const API = new WealtherAPI(city);
    API.getWealtherData()
      .then((data) => {
        loadLocalInfo(data);
        basicInfoLoader(data.current);
        addInfoLoader(data.current);
        foreInfoLoader(data.forecast.forecastday);
      })
      .catch((err) => {
        console.log(err);
        input.setCustomValidity(err);
        input.reportValidity();
      });

    return null;
  });
};

export default loadSearchBar;
