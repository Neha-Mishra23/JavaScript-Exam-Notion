// Object Property Access: Write a function getProperty(obj, prop) that takes an object and a property 
// name as arguments, and returns the value of that property.

function access(obj, prop) {
    return obj[prop];
  }

  let obj ={
    Name : "neha ",
    id :"5443",
}
let print =access(obj,'Name');
console.log(print);