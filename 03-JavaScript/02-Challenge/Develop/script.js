function generatePassword() {
  // Prompt user for password length
  let passwordLength = parseInt(
    prompt("Enter password length (between 8 and 128):")
  );

  // Check if the password length is valid
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    // Notify user of invalid input and exit the function
    alert("Invalid input. Please enter a number between 8 and 128.");
    return ""; // Exit function if invalid length
  }

  // Proceed to ask for character types only if password length is valid
  let includeUpperCase = confirm("Include uppercase letters?");
  let includeLowerCase = confirm("Include lowercase letters?");
  let includeNumber = confirm("Include numbers?");
  let includeSpecialCharacter = confirm("Include special characters?");

  // Check if at least one character type is selected
  if (
    !includeUpperCase &&
    !includeLowerCase &&
    !includeNumber &&
    !includeSpecialCharacter
  ) {
    alert("At least one character type must be selected.");
    return ""; // Exit function if no character types are selected
  }

  // Generate the password based on the selected options
  let availableChar = "";
  if (includeUpperCase) {
    availableChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeLowerCase) {
    availableChar += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeNumber) {
    availableChar += "1234567890";
  }
  if (includeSpecialCharacter) {
    availableChar += "!@#$%^&*()_+-=[]{}|;:,.<>?";
  }

  // Generate the password
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * availableChar.length);
    password += availableChar.charAt(randomIndex);
  }

  return password;
}

// Event listener to generate password when button is clicked
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
});

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
