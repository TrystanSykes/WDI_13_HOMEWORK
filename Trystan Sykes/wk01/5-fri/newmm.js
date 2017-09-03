var originRaw = prompt("What is your station of origin?");
var destinationRaw = prompt("What is your destination station");
var origin = originRaw.toLowerCase();
var destination = destinationRaw.toLowerCase();
 

var alamein = ["flinders street", "richmond", "east richmond", "burnley", "hawthorn", "glenferrie"];

var glenWaverley = ["flagstaff", "melbourne central", "parliament", "richmond", "kooyong", "tooronga"];

var sandringham = ["southern cross", "richmond", "south yarra", "prahran", "windsor"];

var trainLines = [alamein, glenWaverley, sandringham];

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

var getStationIndex = function (line, station) {
  for (var i = 0; i < line.length; i++) {
    if (station === line[i]) {
      return line.indexOf(line[i]);
    }
  }
};

var getSlice = function(lineStopOne, lineStopTwo, line) {
  if (lineStopOne < lineStopTwo) {
    return line.slice(lineStopOne, lineStopTwo += 1);
  }
  else {
    return line.slice(lineStopTwo, lineStopOne += 1).reverse();
  }
}

trainLines.forEach(function(enteredLine) {
  checkStartingLine(origin, enteredLine);
});

trainLines.forEach(function(enteredLine) {
  checkEndingLine(destination, enteredLine);
});

var start = getStationIndex(startingLine[0], origin);
var end = getStationIndex(endingLine[0], destination);
var midOne = startingLine[0].indexOf("richmond");
var midTwo = endingLine[0].indexOf("richmond");

var firstRange = getSlice(start, midOne, startingLine[0]);
var secondRange = getSlice(midTwo, end, endingLine[0]);

firstRange.pop();
trip = firstRange.concat(secondRange);

var output = "Origin: " + origin + "\nDestination: " + destination + "\n\n" + trip.join(" ------> ") + "\n\n" + trip.length + " stops total"

console.log(output)
