// API call to gather currency codes
export default class CurrencyCodes {
  static getCurrencyCodes() {
    const apiKey = process.env.API_KEY;
    return fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}