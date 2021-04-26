import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyCodes from './js/codes.js';
import PairConversion from './js/exchange.js';
import {calculateConversion} from './js/exchange.js';
// UI functions
// Loop to insert each possible currency to the form dropdown
function insertCurrency(response) {
  if (response) {
    response.supported_codes.forEach(function (currency) {
      let currencyName = currency[1];
      let currencyCode = currency[0];
      $("#exchange-form select").append(`<option value="${currencyCode}">${currencyCode} (${currencyName})</option>`);
    });
  } else {
    console.log("The API wasn't able to generate form options");
  }
}

// Function to convert input values to converted output
function convert(amount, base, target) {
  PairConversion.getConversionRate(base,target)
    .then(function (response) {
      let conversionRate = calculateConversion(response);
      let converted = (amount * conversionRate).toFixed(2);
      $("#show-results").after(`<tr><td>${amount}</td><td>${base}</td><td>${target}</td><td>${converted}</td></tr>`);
    });
}

// UI Logic
$(document).ready(function () {
  CurrencyCodes.getCurrencyCodes()
    .then(function(response) {
      insertCurrency(response);
    });

  $("button.convert").click(function(event) {
    event.preventDefault();
    const amount =  $("#exchange-form input.form-control").val();
    const baseInput = $("#exchange-form select#base option:selected").val();
    const targetInput = $("#exchange-form select#target option:selected").val();
    convert(amount, baseInput, targetInput);
    
  });
});