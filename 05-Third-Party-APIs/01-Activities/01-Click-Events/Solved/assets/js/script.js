jQuery(document).ready(function ($) {
  // Use the correct selector `#` to select a button by its ID and not class
  var passwordBtnEl = $('#password-btn');
  var passwordDisplayEl = $('#password-display');

  // Function returns a random character that includes alphanumeric and special character values
  function getPasswordCharacter() {
      // Generate a random number between 33 and 126 (inclusive)
      return String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1)) + 33);
  }

  // Function returns a string of concatenated characters of length num
  function passwordGenerator(num) {
      var password = '';
      for (var i = 0; i < num; i++) {
          password += getPasswordCharacter();
      }
      return password;
  }

  // Change the event listener to `click` to make the event trigger on single-click
  passwordBtnEl.on('click', function () {
      var newPassword = passwordGenerator(15);
      passwordDisplayEl.text(newPassword);
  });
});

/*
1. jQuery(document).ready(function() {...})

	•	Purpose: This ensures that the enclosed code runs only after the DOM (Document Object Model) is fully loaded and ready. This is crucial to make sure that all HTML elements are available for manipulation.
	•	How it works: When the document is ready, the function inside $(document).ready is executed. This function is typically used to set up event handlers, initialize components, or perform other tasks that require the DOM to be fully constructed.

2. String.fromCharCode()

	•	Purpose: This method returns a string created from the specified sequence of UTF-16 code units.
	•	How it works: String.fromCharCode() takes one or more Unicode values (code points) and returns a string where each code point corresponds to a character.

String.fromCharCode(65); // Returns 'A'
String.fromCharCode(97); // Returns 'a'
String.fromCharCode(97, 98, 99); // Returns 'abc'

//Vanilla JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Your code here
});
The DOMContentLoaded event in vanilla JavaScript serves the same purpose as $(document).ready() in jQuery, ensuring that your JavaScript code runs only after the DOM has been fully loaded and is ready to be manipulated.
*/
