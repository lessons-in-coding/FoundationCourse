// Write code to return the the number of vowels in `str`

var str = 'Hello'
var vowelCount = function(str) {
  var result = 0;
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < str.length; i++) {
    var letter = str[i].toLowerCase();

    if (vowels.indexOf(letter) !== -1) {
      result += 1;
    }
  }

  return result;
};

/*
var vowelCount = function(str) {
  var result = 0; // Start result at 0 since we're counting
  var vowels = ["a", "e", "i", "o", "u"];
  var vowelsTotal = []; // Array to store the vowels

  for (var i = 0; i < str.length; i++) {
    var letter = str[i].toLowerCase(); // Convert to lowercase to match with the vowels array

    if (vowels.indexOf(letter) !== -1) { // Check if the letter is a vowel
      result += 1; // Increment the vowel count
      vowelsTotal.push(letter); // Add the vowel to the new array
    }
  }

  return {
    count: result,    // Return the number of vowels
    vowels: vowelsTotal // Return the array of vowels found
  };
};

let output = vowelCount('Hello World!');
console.log(output.count); // 3
console.log(output.vowels); // ['e', 'o', 'o']
*/

// Alternatively, this problem could have been solved without the use of `indexOf`, but by using the logical OR (||) operator to check for each vowel

// var vowelCount = function (str) {
//   var result = 0;

//   for (var i = 0; i < str.length; i++) {
//     var letter = str[i].toLowerCase();

//     if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//       result += 1;
//     }
//   }

//   return result;
// };
