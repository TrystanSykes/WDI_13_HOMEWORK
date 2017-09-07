var stopNo = null;
var start = document.querySelector('#start-button');
var stop = document.querySelector('#stop-button');
var speed = document.querySelector('#speed-button');
var stepLength = 1;
var invis = document.querySelector('.invis');
var invis1 = document.querySelector('.invis1');

var walkRight = function() {
  invis1.style.opacity = 0;
  var img = document.querySelector('img');
  var currentLeftOffset = parseInt(img.style.left)
  img.style.left = (currentLeftOffset + stepLength) + 'px';
  if (currentLeftOffset > 300 && currentLeftOffset < 500) {
    invis.style.opacity = 1;
    }
  if (currentLeftOffset > (window.innerWidth - ((window.innerWidth / 100) * 35))) {
    clearInterval(stopNo);
    stopNo = setInterval(walkLeft, 10);
  }
}
var walkLeft = function() {
  invis.style.opacity = 0;
  var img = document.querySelector('img');
  var currentLeftOffset = parseInt(img.style.left);
  img.style.left = (currentLeftOffset - stepLength) + 'px';
  if (currentLeftOffset > 400 && currentLeftOffset < 500) {
    invis1.style.opacity = 1;
    }
  if (currentLeftOffset < 0) {
    clearInterval(stopNo);
    stopNo = setInterval(walkRight, 10);
  }
}

var startWalk = function() {
  stepLength = 1  ;
  if (stopNo !== null) {
  return;
  } else {
      stopNo = setInterval(walkRight, 10);
      var img = document.querySelector('img');
      var currentLeftOffset = parseInt(img.style.left)
  }
}
var stopWalk = function() {
  clearInterval(stopNo);
  stopNo = null;
}

var faster = function() {
  return stepLength = stepLength + stepLength;
}

start.addEventListener('click', startWalk);
stop.addEventListener('click', stopWalk);
speed.addEventListener('click', faster);



