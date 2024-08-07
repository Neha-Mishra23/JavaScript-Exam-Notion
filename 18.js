// Filter Array: Write a function filterEvenNumbers(arr) that takes an array of numbers and returns a new array with only the even numbers.

function filterEvenNumbers(arr) {
    return arr.filter(element => element % 2 === 0);
  }
  let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);6              