
// // Event listener to generate password when button is clicked
// var generateBtn = document.querySelector("#generate");

// generateBtn.addEventListener("click", function () {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// });


// function generatePassword() {
//   // Prompt user for password length
//   let passwordLength = parseInt(
//     prompt("Enter password length (between 8 and 128):")
//   );

//   // Check if the password length is valid
//   if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
//     // Notify user of invalid input and exit the function
//     alert("Invalid input. Please enter a number between 8 and 128.");
//     return ""; // Exit function if invalid length
//   }

//   // Proceed to ask for character types only if password length is valid
//   let includeUpperCase = confirm("Include uppercase letters?"); //ok/cancel
//   let includeLowerCase = confirm("Include lowercase letters?");
//   let includeNumber = confirm("Include numbers?");
//   let includeSpecialCharacter = confirm("Include special characters?");

//   // Check if at least one character type is selected
//   if (
//     !includeUpperCase &&
//     !includeLowerCase &&
//     !includeNumber &&
//     !includeSpecialCharacter
//   ) {
//     alert("At least one character type must be selected.");
//     return ""; // Exit function if no character types are selected
//   }

//   // Generate the password based on the selected options
//   let availableChar = "";
//   if (includeUpperCase) {
//     availableChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   }
//   if (includeLowerCase) {
//     availableChar += "abcdefghijklmnopqrstuvwxyz";
//   }
//   if (includeNumber) {
//     availableChar += "1234567890";
//   }
//   if (includeSpecialCharacter) {
//     availableChar += "!@#$%^&*()_+-=[]{}|;:,.<>?";
//   }

//   // Generate the password
//   let password = ""; //8 - upper 5 lower 3
//   for (let i = 0; i < passwordLength; i++) {
//     let randomIndex = Math.floor(Math.random() * availableChar.length); //2 2 2 2
//     password += availableChar.charAt(randomIndex);
//   }

//   return password;
// }


/*
// Do While
function generatePassword() {
  let passwordLength;

  // Keep prompting until valid input is provided
  do {
    passwordLength = parseInt(prompt("Enter password length (between 8 and 128):"));
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert('Invalid input. Please enter a number between 8 and 128.');
    }
  } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);

  let includeUpperCase = confirm('Include uppercase letters?');
  let includeLowerCase = confirm('Include lowercase letters?');
  let includeNumber = confirm('Include numbers?');
  let includeSpecialCharacter = confirm('Include special characters?');

  // Check if at least one character type is selected; if not, exit the function
  if (!includeUpperCase && !includeLowerCase && !includeNumber && !includeSpecialCharacter) {
    alert('At least one character type must be selected.');
    return ""; // Exit the function as no character types are selected
  }

  // Proceed with password generation if inputs are valid
  let availableChar = "";
  if (includeUpperCase) {
    availableChar += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (includeLowerCase) {
    availableChar += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (includeNumber) {
    availableChar += '1234567890';
  }
  if (includeSpecialCharacter) {
    availableChar += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * availableChar.length);
    password += availableChar.charAt(randomIndex);
  }

  return password;
}
*/


// Event listener to generate password when button is clicked
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  var password = generatePassword(); // Call the function to generate the password
  var passwordText = document.querySelector("#password"); // Find the password text box
  passwordText.value = password; // Display the generated password in the text box
});

// Function to generate the password
function generatePassword() {
  // Ask the user for the password length
  var passwordLength = parseInt(prompt("Enter password length (between 8 and 128):"));

  // Check if the length is valid
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid length. Please enter a number between 8 and 128.");
    return ""; // Stop if the input is invalid
  }

  // Ask the user what types of characters to include
  var includeUpperCase = confirm("Include UPPERCASE letters?");
  var includeLowerCase = confirm("Include lowercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialChars = confirm("Include special characters?");

  // Check if at least one type is selected
  if (!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSpecialChars) {
    alert("You must select at least one character type!");
    return ""; // Stop if no types are selected
  }

  // Define the character groups
  var charGroups = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    special: "!@#$%^&*()_+-=[]{}|;:,.<>?"
  };

  // Collect the chosen characters into one string
  var availableChars = "";
  if (includeUpperCase) availableChars += charGroups.upper;
  if (includeLowerCase) availableChars += charGroups.lower;
  if (includeNumbers) availableChars += charGroups.numbers;
  if (includeSpecialChars) availableChars += charGroups.special;

  // Generate the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    // Pick a random character from the available characters
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  // Return the completed password
  return password;
}

