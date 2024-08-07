"use strict";

// Selecting elements
const currencySelect = document.querySelector(".select_input select"); //<select>
const exRateTxt = document.querySelector(".result"); //<p>
const currencyImg = document.querySelector(".select_input img"); //img

const API_KEY = "0c356af7d4c81015043245ae";

// Populate the select element with currency codes
for (let curcode in Country_List) {
  // Determine if the current currency code is USD
  const selected = curcode === "USD" ? "selected" : "";
  // Create the option element
  currencySelect.insertAdjacentHTML(
    "beforeend",
    `<option value="${curcode}" ${selected}>${curcode}</option>`
  );
}

/*
// Same as the above .insertAdjacentHTML() method
// Create the option element
const option = document.createElement("option");

// Set the value of the option
option.value = curcode;

// Set the text content of the option
option.textContent = curcode;

// Optionally set the selected attribute
if (curcode === "USD") {
  option.selected = true;
}

// Append the option to the select element
currencySelect.appendChild(option);

*/

// Change event to update the flag image when a new currency is selected
currencySelect.addEventListener("change", () => {
  const code = currencySelect.value;
  currencyImg.src = `https://flagcdn.com/48x36/${Country_List[
    code
  ].toLowerCase()}.png`;
  getExchangeRate();
});

// Function to get exchange rate from API
async function getExchangeRate() {
  exRateTxt.textContent = "Please Wait................";

  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`
    );
    const result = await response.json();

    const exRate = result.conversion_rates[currencySelect.value];
    exRateTxt.textContent = `1 USD = ${exRate.toFixed(2)} ${
      currencySelect.value
    }`;
    console.log(exRate);
  } catch (error) {
    exRateTxt.textContent = "Something Went Wrong";
    console.error(error);
  }
}

// Fetch exchange rate on page load
window.addEventListener("DOMContentLoaded", getExchangeRate);

// Get the keys of the Country_List object
// const currencyCodes = Object.keys(Country_List);

// Populate the select element with currency codes using a for loop
// for (let i = 0; i < currencyCodes.length; i++) {
//     const curcode = currencyCodes[i];
//     const selected = curcode === "USD" ? "selected" : "";
//     currencySelect.insertAdjacentHTML(
//       "beforeend",
//       `<option value="${curcode}" ${selected}>${curcode}</option>`
//     );
//   }

// https://arhaanali.medium.com/currency-converter-app-using-html-css-and-javascript-167f63e0ec6f
