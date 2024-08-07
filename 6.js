// If-Else Statement: Write a function checkEvenOdd(num) that checks if a number is even or odd and returns the result as a string.

function checkEvenOdd(num) {
    if (num % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

  let result = checkEvenOdd(3);
  console.log(result);
  
  let result2 = checkEvenOdd(4);
  console.log(result2);
  
    