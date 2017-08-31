var origin = "Flinders Street";
var destination = "East Richmond";

var alamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];

var glenWaverley = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];

var sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

var trainLines = [alamein, glenWaverley, sandringham];
//using index of and slice we can print from our origin and dest indicies. aim to be able to move between any 2 stations in a line by the end of tonight. backwards too maybe.

var trip = [];
var startingLine = [];

function checkStartingLine (originStation, line) {
  for (var i = 0; i < line.length; i++) {
    if (line[i].match(originStation)) {
      startingLine.push(line);
    } 
      else {
          break;
    }
  }
};

checkStartingLine(origin, alamein);
checkStartingLine(origin, glenWaverley);
checkStartingLine(origin, sandringham);


if (startingLine[0] === alamein) {
  for (var i = 0; i < alamein.length; i++) {
    if (origin === alamein[i]) {
      var start = alamein.indexOf(alamein[i]);
      for (var j = 0; j < alamein.length; j++) {
        if (destination === alamein[j]) {
          var end = alamein.indexOf(alamein[j]);
  }     if (start < end) {
          var range = alamein.slice(start, end += 1);
          console.log(range);
  }     else {
          var range = alamein.slice(end, start += 1);
          console.log(range);
          range.reverse();
  }
    }
  }
}
}



trip.push(range);



var output = "Origin: " + origin + "\nDestination: " + destination + "\n\n" + trip[0].join(" ------> ") + "\n\n" + trip[0].length + " stops total"

console.log(output)