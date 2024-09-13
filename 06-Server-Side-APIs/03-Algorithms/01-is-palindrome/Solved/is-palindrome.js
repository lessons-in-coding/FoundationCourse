// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
  var reversedString = str
    .split('')  //["r", "a", "c", "e", "c", "a", "r"]
    .reverse()  //["r", "a", "c", "e", "c", "a", "r"]
    .join('');  //racecar

  if (reversedString === str) {
    return true;
  } else {
    return false;
  }
};

// isPalindrome("racecar"); //true
// isPalindrome("madam"); //true
// isPalindrome("level"); //true
// isPalindrome("hello"); //false

// Alternatively, this problem could have been solved by comparing the letters at the front of `str` to the letters at the back of `str`

// var isPalindrome = function (str) {
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// };
/*
	•	-1: Refers to the last index of the string.
	•	-i: Subtracts i from the total length to move further back from the end of the string in each loop iteration.
*/
