// var numbers = [2,5,11];

// var doubleAndLog = function(num) {
//   console.log(num * 2);
// }

// var myForEach = function(array, fn) {
//   for (i = 0; i < array.length; i++) {
//     fn(array[i]);
//   }
// }

// 23 celsius

//f = c * (9 / 5) + 32
//var magicNumber = 32;


// var tempConverter = function(celsius) {
//   var fahrenheit = celsius * (9 / 5) + magicNumber;
//   return fahrenheit;
// }

// var todaysTemp = 23;
// var tempArr = [23, 34, 12];

// f = tempConverter(tempArr);

// argument
//tempConverter(23);

//console.log("fahrenheit: " + fahrenheit);

//advantage of organizing code as functions
// repeatability = if u need to do things multiple time you can use the function
// readability
// scalability = 
// 

// var born = 1986;
// var yearATM = 2017;

// var ageGen = function(birthYear) {
//   var date = new Date();
//   var currentYear = date.getFullYear();
//   var ageBDPrior = currentYear - birthYear;
//   var ageBDPassed = (currentYear - birthYear) + 1;
//   return "you are either " + ageBDPrior + " or " + ageBDPassed;
// };


// var currentAge = 31;
// var appetite = 3.5;
// var maxAge = 100;

// var calculateSupply = function(age, amountPerDay) {
//   var supplyNeeded = (((maxAge - age) * appetite) * 365);
//     supplyNeeded = Math.round(supplyNeeded);
//     return "You will need " + supplyNeeded + " to last you until the ripe old age of " + maxAge; 
// }

// var enteredRadius = 5;


// var calcCircumfrence = function(radius) {
//   circAnswer = ((radius * 2) * Math.PI);
//   return "The Circumfrence is " + circAnswer; 
// }

// var calcArea = function(radius) {
//   areaAnswer = Math.PI * (radius * radius);
//   return "The Area is " + areaAnswer;
// }

var fruits = ['banana is good', 'apple is bad', 'orange is colored', 'mango is shit'];

var lengths = function(stringArr) {
  var lengthOfElements = [];
  stringArr.forEach( function(elem) {
    lengthOfElements.push(elem.length );
  });

  return lengthOfElements;  
  };

 var transmogrifier = function(x,y,z) {
  return Math.pow((x * y), z);
};

var wordReverse = function(words) {
  var wordList = words.split(" ");
  var reverseWords = wordList.reverse();
  var reversedString = reverseWords.join(" ");
  return reversedString;
};

var arrayReverse = function(array) {
  array.forEach (function(currentIt) {
    console.log(wordReverse(currentIt));
  })
};

