// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
  var result = 1;

  for (var i = num; i > 1; i--) {
    result = result * i;
  }

  return result;
};

/*
	•	The factorial function uses a loop to compute the factorial of a given number by multiplying the number down to 2.
	•	The loop stops at i = 2 because multiplying by 1 doesn’t change the result.
	•	It works for small numbers and edge cases like 0 (which correctly returns 1).
*/
