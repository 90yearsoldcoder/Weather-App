import WealtherAPI from '../APIfunctions/wealtherAPI';
import loadLocalInfo from './loadLocalInfo';
import config from '../config';
import loadOutline from './loadOutline';
import loadSearchBar from './loadSearchbar';
import basicInfoLoader from './basicInfoLoader';
import addInfoLoader from './addInfoLoader';

const firstLoader = () => {
  loadOutline();

  const { city } = config;
  const API = new WealtherAPI(city);
  API.getWealtherData().then((data) => {
    loadSearchBar();
    loadLocalInfo(data);
    basicInfoLoader(data.current);
    addInfoLoader(data.current);
  });
};

export default firstLoader;
