export default class EpicImg {
  static getImg(date) {
    const apiKey = process.env.API_KEY;
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${date}&end_date=${date}`)
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