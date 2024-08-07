// Object Update: Write a function updateProperty(obj, prop, value) that updates the value of a given property in an object.

function update(obj, prop, value) {
    obj[prop] = value;
    return obj;
  }
  let black = { name: 'neha', age: 28 };
  let newPerson = update(black, 'age', 30);
  console.log(update);  
