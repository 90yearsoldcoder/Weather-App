import '../Styles/searchBar.css';
import searchPic from '../assets/search-icon.png';

const loadSearchBar = () => {
  const searchBarContainer = document.createElement('div');
  searchBarContainer.classList.add('searchBarContainer');

  searchBarContainer.innerHTML = `
  <input class="searchBar-input" placeholder="Location..City,ZIP">
    <div class="search_icon"></div>
  `;

  const searchIcon = searchBarContainer.querySelector('.search_icon');
  searchIcon.style.backgroundImage = `url(${searchPic})`;

  const centreContainer = document.querySelector('#centreContainer');
  centreContainer.appendChild(searchBarContainer);

  // Todo: add listener to search icon
  // ......
};

export default loadSearchBar;
