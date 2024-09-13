# 1. Palindrome Check:

This algorithm checks whether a given string is a palindrome (a word that reads the same forwards and backwards).

var isPalindrome = function(str) {
  var cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  var reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
};

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false

# 2. Reverse a String:

A simple algorithm to reverse a string.

var reverseString = function(str) {
  return str.split('').reverse().join('');
};

console.log(reverseString("hello")); // "olleh"

# 3. Factorial of a Number:

This function returns the factorial of a number, which is the product of all positive integers less than or equal to the number.

var factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log(factorial(5)); // 120

# 4. Find the Largest Number in an Array:

This algorithm finds the largest number in a nested array of numbers.

var largestOfEach = function(arr) {
  return arr.map(subArray => Math.max(...subArray));
};

console.log(largestOfEach([[1, 2, 3], [5, 6, 7], [8, 9, 0]])); // [3, 7, 9]

# 5. Sum of All Numbers in a Range:

This algorithm calculates the sum of all numbers in a range, including the given start and end numbers.

var sumAll = function(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var sum = 0;

  for (var i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

console.log(sumAll([1, 4])); // 10 (1 + 2 + 3 + 4)

# 6. Counting Unique Values:

Count how many unique values are in a sorted array.

var countUniqueValues = function(arr) {
  if (arr.length === 0) return 0;
  var count = 1;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      count++;
    }
  }

  return count;
};

console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5])); // 5

# 7. Anagram Check:

This function checks if two strings are anagrams (i.e., they contain the same characters in a different order).

var isAnagram = function(str1, str2) {
  var normalize = function(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
  };
  
  return normalize(str1) === normalize(str2);
};

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false

# 8. Fibonacci Sequence:

This algorithm generates the Fibonacci sequence up to a given number of terms.

var fibonacci = function(n) {
  var fib = [0, 1];
  
  for (var i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  return fib;
};

console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# 9. Find the Missing Number in an Array:

This algorithm finds the missing number in an array of numbers from 1 to n.

var findMissingNumber = function(arr, n) {
  var expectedSum = (n * (n + 1)) / 2;
  var actualSum = arr.reduce((a, b) => a + b, 0);

  return expectedSum - actualSum;
};

console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // 3

# 10. Caesar Cipher (Basic Encryption):

This algorithm encrypts a message by shifting the letters of the alphabet by a given number of positions.

var caesarCipher = function(str, shift) {
  return str.replace(/[a-z]/gi, function(char) {
    var code = char.charCodeAt();
    var base = (code >= 65 && code <= 90) ? 65 : 97;
    return String.fromCharCode(((code - base + shift) % 26) + base);
  });
};

console.log(caesarCipher("Hello", 3)); // "Khoor"