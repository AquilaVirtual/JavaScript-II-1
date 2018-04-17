// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const myClosure = () => {
  let firstNam =  'David', lastName = 'Loveday';
    return () => {
      return 'my name is ' + firstNam + ' ' + lastName;
    };
};
let myclosure = myClosure();
console.log(myclosure());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => {
  return ++count
  };
};

let newCounter = counter();
// Example usage: const newCounter = counter();
console.log(newCounter());
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let counter = 0;
  const obj = {"increment": () =>{ return ++counter;  }, "decrement": ()=> { return --counter; }};
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
