  // var num1Input = document.querySelector('#num1'); example
var empty = 0;
var savBalance = document.querySelector('#savBalance');
var savUserAmount = document.querySelector('#savUserAmount');
var savWithdraw = document.querySelector('#savWithdraw');
var savDeposit = document.querySelector('#savDeposit');

savDeposit.addEventListener('click', function() {
  var balNum = Number(savBalance.textContent);
  var userNum = Number(savUserAmount.value);
  savBalance.textContent = (balNum + userNum).toFixed(2);
});

savWithdraw.addEventListener('click', function() {
  var balNum = Number(savBalance.textContent);
  var userNum = Number(savUserAmount.value);
  var sum = (balNum - userNum).toFixed(2);
  if (sum < 0) {
    alert("Sorry, that withdrawl amount exceeds your balance");
  } else {
    savBalance.textContent = sum;
  }
   
});

chkDeposit.addEventListener('click', function() {
  var balNum = Number(chkBalance.textContent);
  var userNum = Number(chkUserAmount.value);
  chkBalance.textContent = (balNum + userNum).toFixed(2);
});

chkWithdraw.addEventListener('click', function() {
  var balNum = Number(chkBalance.textContent);
  var userNum = Number(chkUserAmount.value);
  var sum = (balNum - userNum).toFixed(2);
  if (sum < 0) {
    var fullBal = Number(savBalance.textContent) + Number(chkBalance.textContent);
    var sum = (fullBal - userNum).toFixed(2);
    if (sum < 0) {
    alert("Sorry, that withdrawl amount exceeds your balance");
    } else {
      var adjSavBal = (sum + Number(chkBalance.textContent));
        savBalance.textContent = Number(adjSavBal).toFixed(2);
        (chkBalance.textContent) = empty.toFixed(2);

    }
  } else {
    chkBalance.textContent = sum;
  }
});
