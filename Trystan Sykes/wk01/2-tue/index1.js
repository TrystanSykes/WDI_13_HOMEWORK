console.log('javascript is working')
for (var number = 0; number <= 20; number++) {
  if (number % 2 === 0) {
    console.log(number + " is even"); 
  } else {
    console.log(number + " is odd");
  }
}

for (var i = 0; i <= 10; i++) {
  for (var x = 0; x <= 10; x++) {
  var sum = (i * x);
  console.log(sum);
    
  }
}

var myTopColors = ["Green", "Blue", "Purple"];

var position = ["1st", "2nd", "3rd"];

for (var y = 0; y < myTopColors.length; y++); {
  for (var y = 0; y < position.length; y++) {
    console.log("My " + position[y] + " choice is " + myTopColors[y])
  }
  }