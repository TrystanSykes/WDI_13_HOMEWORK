var headsCount = 0;
var tailsCount = 0;
var coin = document.querySelector('.coin');
var tailCounter = document.querySelector('.tailCounter');
var headCounter = document.querySelector('.headCounter');
var victoryScreen = document.querySelector('.victory');
var resultBox = document.querySelector('.result-box');

var addImg = function(imgPath) {
  var newImg = document.createElement("img");
  newImg.setAttribute("src", imgPath);
  newImg.setAttribute("height", "50");
  newImg.setAttribute("width", "50");
  resultBox.appendChild(newImg);
};

var clear = function() {
  headsCount = 0;
    tailsCount = 0;
    tailCounter.textContent = "Tails " + tailsCount;
    headCounter.textContent = "Heads " + headsCount;
    resultBox.innerHTML = "";
  };

var coinFlip = function () {
  victoryScreen.textContent = "";
  coin.src = 'coinflip.gif';
  var randomNo = Math.random();
  if (randomNo > 0.5) {
    setTimeout(function() {
      coin.src = 'heads.jpeg';
    }, 1000);
    headsCount = headsCount += 1;
    headCounter.textContent = "Heads " + headsCount;
    addImg('heads.jpeg');
    if (headsCount === 5) {
      victoryScreen.textContent = "Heads is the Winner!";
      clear();
    }
  } else {
    setTimeout(function() {
      coin.src = 'tails.jpg';
    }, 1000);
    tailsCount = tailsCount += 1;
    tailCounter.textContent = "Tails " + tailsCount;
    addImg('tails.jpg');
    if (tailsCount === 5) {
    victoryScreen.textContent = "Tails is the Winner!";
    clear();
    }
  }
}

coin.addEventListener('click', coinFlip);

