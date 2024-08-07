// Map Array: Write a function doubleArrayElements(arr) that takes an array of numbers and returns a new array with all elements doubled.

function doubleArrayElements(arr) {
    return arr.map(element => element * 2);
  }
  
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = doubleArrayElements(numbers);
console.log(doubledNumbers);  