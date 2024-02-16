const apiKey = '95e4ef5f2ca34bf98bd210133241502';

class WealtherAPI {
  constructor(city) {
    this.city = city;
  }

  generateForecastURL() {
    return `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${this.city}&days=5&aqi=no&alerts=no`;
  }

  async getWealtherData() {
    const url = this.generateForecastURL();
    // console.log(url);
    const respose = await fetch(url, { mode: 'cors' });
    const wealtherData = await respose.json();

    return wealtherData;
  }
}

export default WealtherAPI;
