// JS Event Listeners

// An event is an  action perfromed by the user on a website
// E.g. Clicking a button, pressing a keyboard key

//  Always add an Id to any element that javaScript needs to find (e.g. buttons and inputs)

//addEventListener("event", fuction) command is used to turn "turn on " abutton
// getelemnetbyID("IDname") command tells JS to look for an element using the ID
// a fuction is group tat runs when called on
// you want to name your functo similair to how you name varbiakes
//console errror: cannpot read properties  opf null almost alwasya spelling misktae on th IDs
// cnsoel errors awlays gove u the line ofocee were error is found.

document.getElementById("pizza-btn").addEventListener("click", orderPizza);

function orderPizza() {
  var size = prompt("What size pizza?");
  var topping1 = prompt("First toping");
  var topping2 = prompt("Second toping");

  var output = `Your ${size} Pizza with ${topping1} and ${topping2} will be ready in 15 minutes.`;

  alert(output);
}

// Create a button that, when cilcked Asks the user for thier name city.
//  In the CONSOLE, display: Hello <Name> from <city>
document.getElementById("greet-btn").addEventListener("click", Greet);

function Greet() {
  var name = prompt("What is your name?");
  var city = prompt("What city are you from?");
  let output = "Hello, " + name + " from " + city + "!";
  console.log(output);
}

document.getElementById("madLib-btn").addEventListener("click", madlib);

function madlib() {
  var num1 = prompt("Give me a random number");
  var num2 = prompt("Give me one more number");
  var animal1 = prompt("Give me a random animal");
  var animal2 = prompt("Give me one more random animal");
  let output = `I own ${num1} ${animal1}s and ${num2} ${animal2}s!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`;
  alert(output);
}

document.getElementById("Blessin-btn").addEventListener("click", blessing);
function blessing() {
  let output = "the devil";
  alert(output);
}

document.getElementById("dime-btn").addEventListener("click", dime);
function dime() {
  let output = "both worlds";
  alert(output);
}

document.getElementById("lateThen-btn").addEventListener("click", lateThen);
function lateThen() {
  let output = "around something";
  alert(output);
}

document.getElementById("pain-btn").addEventListener("click", pain);
function pain() {
  let output = "louder than words";
  alert(output);
}

document.getElementById("time-btn").addEventListener("click", time);
function time() {
  let output = "gets the worm";
  alert(output);
}
