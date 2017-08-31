for (i = 0; i < trainLines.length; i++) {
  for (j = 0; j < trainLines[i].length; j++) {
    if (origin === trainLines[i][j]) {
      var startingLine = (trainLines[i])
    }
  }
}


for (i = 0; i < trainLines.length; i++) {
  for (j = 0; j < trainLines[i].length; j++) {
    if (destination === trainLines[i][j]) {
      var endingLine = (trainLines[i])
    }
  }
}

if (startingLine = endingLine) {
    for (var i = 0; i < startingLine.length; i++) {
    if (origin === startingLine[i]) {
      var start = startingLine.indexOf(startingLine[i]);
  }
}
    for (var i = 0; i < startingLine.length; i++) {
    if (destination === startingLine[i]) {
      var end = startingLine.indexOf(startingLine[i]);
  }
}
    if (start < end) {
      var range = alamein.slice(start, end += 1);
  } else {
      var range = alamein.slice(end, start += 1);
      range.reverse();
  }
}

    trip.push(range);
