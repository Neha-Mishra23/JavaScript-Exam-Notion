// Find Max in Array: Write a function findMax(arr) that takes an array of numbers and returns the maximum value.

function findMax(arr) {
    return Math.max(...arr);
  }

  let numbers = [1, 2, 3, 4, 5];
  let max = findMax(numbers);
  console.log(max);  