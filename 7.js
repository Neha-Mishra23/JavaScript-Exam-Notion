// Switch Statement: Write a function getDayName(dayNumber) that takes a number (1-7) and returns the name of the corresponding day of the week.

function crre(one) {
    switch (one) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
      default:
        return "Invalid day number";
    }
  }
  

  let day = crre(3);
  console.log(day);