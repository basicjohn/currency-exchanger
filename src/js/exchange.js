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
        return error;
      });
  }
}


export function calculateConversion(response) {
  if (response) {
    const conversionRate = response.conversion_rate;
    return conversionRate;
  }
  else {
    console.log("The API wasn't able to generate form options");
  }
}


