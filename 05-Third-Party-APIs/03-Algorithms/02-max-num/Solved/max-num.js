// Write code to return the largest number in the given array

var maxNum = function (arr) {
  var max = arr[0];

  for (var i = 1; i < arr.length; i++) {
    var currentNum = arr[i];

    if (currentNum > max) {
      max = currentNum;
    }
  }

  return max;
};

maxNum([2, 3, -2, 99, 100, 5000, 321]);

// var result = maxNum([3, 5, 7, 2, 8, 1]);
// console.log(result); // Output: 8

/*
	The loop starts from 1 because the first element (arr[0]) has already been considered as the initial maximum value before the loop begins.
	•	Starting the loop from 0 would work, but it would involve an unnecessary comparison of the first element with itself, which is redundant.
*/