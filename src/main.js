import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyCodes from './js/codes.js';


function insertCurrency(response) {
  if (response) {
    response.supported_codes.forEach(function (currency) {
      let currencyName = currency[1];
      let currencyCode = currency[0];
      $("#exchange-form select").append(`<option value="${currencyCode}">${currencyName}</option>`);
    });
  } else {
    console.log("The API wasn't able to generate form options");
  }
}

CurrencyCodes.getCurrencyCodes()
  .then(function (response) {
    insertCurrency(response);
  });


(document).ready(function () {
  $("#exchange-form").submit(function (event) {
    event.preventDefault();
  });
});