var origin = "Flinders Street";
var destination = "East Richmond";

var alamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];

var glenWaverley = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];

var sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

var trainLines = [alamein, glenWaverley, sandringham];
//using index of and slice we can print from our origin and dest indicies. aim to be able to move between any 2 stations in a line by the end of tonight. backwards too maybe.

var trip = [];

//trip.push(destination);

for (var i = 0; i < alamein.length; i++) {
  if (origin === alamein[i]) {
    var start = alamein.indexOf(alamein[i]);
  }
}
for (var i = 0; i < alamein.length; i++) {
  if (destination === alamein[i]) {
    var end = alamein.indexOf(alamein[i]);
  }
}
if (start < end) {
  var range = alamein.slice(start, end += 1);
  } else {
    var range = alamein.slice(end, start += 1);
    range.reverse();
  }

trip.push(range);



var output = "Origin: " + origin + "\nDestination: " + destination + "\n\n" + trip[0].join(" ------> ") + "\n\n" + trip[0].length + " stops total"

console.log(output)