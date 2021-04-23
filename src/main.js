import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyCodes from './js/codes.js';
// import PairConversion from './js/exchange.js';
import {convert} from './js/exchange.js';


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
    const amount =  $("#exchange-form input.form-control").val();
    const baseInput = $("#exchange-form select#base option").selected();
    const targetInput = $("#exchange-form select#target option").selected();
    
    let converted = convert(amount, baseInput, targetInput);

    $("#show-results").html(`converted`);

    

  });
});