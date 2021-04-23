import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyCodes from './js/codes.js'


function insertCurrency(response) {
  if (response[0]) {
    response[0].forEach(currency) {
      let currencyName = currency[1];
      let currencyCode = currency[0];
      $("form#exchange-form").append(`<option value="${currencyCode}">${currencyName}</option>`);
    }


  } else {
    $(".show-img").empty();
    $(".show-img").text("Woops, there's no photo from that date!");
  }
}