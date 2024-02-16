import WealtherAPI from './APIfunctions/wealtherAPI';

const API = new WealtherAPI('Boston');
API.getWealtherData().then((data) => {
  console.log(data);
});
