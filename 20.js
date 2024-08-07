// Reduce Array: Write a function productOfArray(arr) that takes an array of numbers and returns the product of all elements using the reduce method.

function productOfArray(arr) {
    return arr.reduce((a, b) => a * b, 1);
  }
  let numbers = [1, 2, 3, 4, 5];
  let product = productOfArray(numbers);
  console.log(product); 
  