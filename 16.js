// Loop Through Array: Write a function sumArrayElements(arr) that takes an array of numbers and returns the sum of its elements.

function sumArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  let numbers = [1, 2, 3, 4, 5];
  let sum = sumArrayElements(numbers);
  console.log(sum);  