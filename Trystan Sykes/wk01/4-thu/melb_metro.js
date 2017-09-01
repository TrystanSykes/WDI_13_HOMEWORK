var origin = "Windsor";
var destination = "Glenferrie";

var alamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];

var glenWaverley = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];

var sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];



var startingLine = [];
var endingLine = [];

function checkStartingLine (originStation, line) {
  for (var i = 0; i < line.length; i++) {
    if (line[i] === originStation) {
      startingLine.push(line);
    }
  }
};

function checkEndingLine (endStation, line) {
  for (var i = 0; i < line.length; i++) {
    if (line[i] === endStation) {
      endingLine.push(line);
    }
  }
};

checkStartingLine(origin, alamein);
checkStartingLine(origin, glenWaverley);
checkStartingLine(origin, sandringham);
checkEndingLine(destination, alamein);
checkEndingLine(destination, glenWaverley);
checkEndingLine(destination, sandringham);

if (startingLine === endingLine) {
  for (var i = 0; i < startingLine[0].length; i++) {
    if (origin === startingLine[0][i]) {
      var start = startingLine[0].indexOf(startingLine[0][i]);
    }
  }
  for (var j = 0; j < startingLine[0].length; j++) {
    if (destination === startingLine[0][j]) {
      var end = startingLine[0].indexOf(startingLine[0][j]);
    }
  }
  if (start < end) {
    var range = startingLine[0].slice(start, end += 1);
    }
    else {
      var range = startingLine[0].slice(end, start += 1);
        range.reverse();
  }
} else {
    for (var i = 0; i < startingLine[0].length; i++) {
      if (origin === startingLine[0][i]) {
        var start = startingLine[0].indexOf(startingLine[0][i]);
      }
    }
    var midOne = startingLine[0].indexOf("Richmond");

    for (var i = 0; i < endingLine[0].length; i++) {
      if (destination === endingLine[0][i]) {
        var end = endingLine[0].indexOf(endingLine[0][i]);
      }
    }
    var midTwo = endingLine[0].indexOf("Richmond");
  } if (start < midOne) {
    var firstRange = startingLine[0].slice(start, midOne += 1);
    }
    else {
      var firstRange = startingLine[0].slice(midOne, start += 1);
        firstRange.reverse();  
    }
    if (midTwo < end) {
      var secondRange = endingLine[0].slice(midTwo, end += 1);
    } else {
      var secondRange = endingLine[0].slice(end, midTwo += 1);
      secondRange.reverse();
}
  





firstRange.pop();
trip = firstRange.concat(secondRange);




var output = "Origin: " + origin + "\nDestination: " + destination + "\n\n" + trip.join(" ------> ") + "\n\n" + trip.length + " stops total"

console.log(output)