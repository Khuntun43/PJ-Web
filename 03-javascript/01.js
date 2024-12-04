
const myCheckBox = document.querySelector("#myCheckBox");
const visaBtn = document.querySelector("#visaBtn");
const masterCardBtn = document.querySelector("#masterCardBtn");
const payPalBtn = document.querySelector("#payPalBtn");
const mySubmit = document.querySelector("#mySubmit");
const subResult = document.querySelector("#subResult");
const paymentResult = document.querySelector("#paymentResult");


mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = "You are subscribed!";
  }
  else {
    subResult.textContent = "You are NOT subscribed!";
  }
  if (visaBtn.checked) {
    paymentResult.textContent = "You are paying with Visa!";
  }
  else if (masterCardBtn.checked) {
    paymentResult.textContent = "You are paying with MasterCard!";
  }
  else if (payPalBtn.checked) {
    paymentResult.textContent = "You are paying with payPalCard!";
  }
  else {
    paymentResult.textContent = "You must select a payment type"
  }
 }