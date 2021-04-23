import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyCodes from './js/codes.js';
import {PairConversion,calculateExchange} from './js/exchange.js';


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




(document).ready(function () {
  CurrencyCodes.getCurrencyCodes()
    .then(function (response) {
      insertCurrency(response);
    });
  $("#exchange-form").submit(function (event) {
    event.preventDefault();
    const amount =  $("#exchange-form input.form-control").val();
    const base = $("#exchange-form select#base").val();
    const target = $("#exchange-form select#ending").val();
    PairConversion.getConversionRate(base,target)
      .then(function (response) {
        calculateExchange(response);
      });

  });
});