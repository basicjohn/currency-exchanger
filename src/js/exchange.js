export default class PairConversion {
  static getConversionRate(base, target) {
    const apiKey = process.env.API_KEY;
    return fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${base}/${target}/`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        throw error;
      });
  }
  static getRate(response) {
    const conversionRate = response.conversion_rate;
    return conversionRate;
  }
}




