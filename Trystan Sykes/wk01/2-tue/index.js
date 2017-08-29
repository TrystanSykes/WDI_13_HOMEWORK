console.log("javascript is working");
var name = prompt("What is your name?");
console.log("Welcome " + name);

var order = prompt("On the menu tonight: steak, fruit salad, tofurkey, pork chops. What item would you like to order " + name +"?");
var convertedOrder = order.toLowerCase();
if (convertedOrder === "steak" || convertedOrder === "pork chops") {
  console.log("Vegans beware!");
} else {
  console.log("This cuisine is vegan friendly.");
}

