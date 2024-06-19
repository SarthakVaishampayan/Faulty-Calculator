alert("Welcome to the faulty calculator");

var random = Math.random();
console.log(random);

var a = prompt("Enter the first number ");
var c = prompt("Enter the operation ");
var b = prompt("Enter the second number ");

// a = parseInt(a);
// b = parseInt(b);

let matrix = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": " ** ",
};

if (random > 0.1) {
  //   // perform right operation

  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  //   // perform wrong operation (10% times)

  c = matrix[c]; //update the operation according to the fault
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
