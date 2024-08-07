"use strict";

const handleSubmit = (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  fetch("https://open.er-api.com/v6/latest/USD")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const currencyInput = document.querySelector("#currency");
      const currency = currencyInput.value.toUpperCase();
      const rate = data.rates[currency];

      if (rate !== undefined) {
        document.querySelector(
          "#result"
        ).innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}.`;
      } else {
        document.querySelector("#result").innerHTML = "Invalid Currency.";
      }

      // Clear the input field after processing
      currencyInput.value = "";
    })
    .catch((error) => {
      console.error("Error:", error);
      document.querySelector("#result").innerHTML =
        "Error fetching exchange rate.";
    });
};

// Add event listener to the button
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#getRateBtn").addEventListener("click", handleSubmit);

  // Add event listener to the input field to handle Enter key press
  document
    .querySelector("#currency")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        handleSubmit(event);
      }
    });
});
