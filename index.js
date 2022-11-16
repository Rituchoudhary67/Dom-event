// const button = document.getElementById("button1");
// const theNumber = document.getElementById("the-number");
// const Div = document.getElementById("example-div");
// var counter = 0;
// theNumber.innerText = counter;

// function increment() {
//   counter++;
//   theNumber.innerText = counter;
// }

// button.addEventListener("click", increment);
// Div.addEventListener("mouseover", () => {
//   counter = 0;
//   theNumber.innerText = counter;
// });

// Div.addEventListener("mouseout", () => {
//   if (counter === 0) {
//     counter = -9;
//   } else {
//     counter = -counter;
//   }

//   theNumber.innerText = counter;
// });
const button = document.getElementById("simple-button");
const theNumber = document.getElementById("the-number");
const Div = document.getElementById("example-div");

let counter = 0;
theNumber.innerText = counter;

function incrementBy1() {
  counter++;
  theNumber.innerText = counter;
}

button.addEventListener("click", incrementBy1);
Div.addEventListener("mouseover", () => {
  counter = 0;
  theNumber.innerText = counter;
});

Div.addEventListener("mouseout", () => {
  if (counter === 0) {
    counter = -69;
  } else {
    counter = -counter;
  }

  theNumber.innerText = counter;
});

// exampleDiv.addEventListener("mouseover", () => {
//   console.log("Mouse is over the example Div");
// });

// exampleDiv.addEventListener("mouseout", () => {
//   console.log("Mouse is outside of the Div");
// });

/* Callback function */
function addTwoNumber(a, b, functionToCall) {
  const sum = a + b;

  // We can call a function
  for (let i = 0; i < 10; i++) {
    functionToCall(sum);
  }
}

function printSum(sum) {
  console.log(sum);
}

addTwoNumber(5, 6, printSum); // 10 * 11

// Question: Are we calling this function, or passing it as a parameter.
// const printButtonClicked = () => console.log("Button Called");

// button.addEventListener("mouseup", () => console.log("button released"));
// button.addEventListener("mousedown", () => console.log("button pressed"));

// const exampleDiv = document.getElementById("example-div");

// exampleDiv.addEventListener("mouseover", () => {
//   console.log("Mouse is over the example Div");
// });

// exampleDiv.addEventListener("mouseout", () => {
//   console.log("Mouse is outside of the Div");
// });
