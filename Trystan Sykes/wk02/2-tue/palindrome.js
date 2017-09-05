var input = prompt("Enter a word or phrase to check if it is a palindrome:");

var lowerCaseInput = input.toLowerCase();

var noPunctImput = lowerCaseInput.match(/[^_\W]+/g).join(' ');

var cleanInput = noPunctImput.replace(/\s+/g, '');

var palindromeCheck = function(input) {
  if (input === input.split("").reverse().join("")) {
    return true
  } else {
      return false
  }
};
var response = palindromeCheck(cleanInput);
if (response === true) {
  alert("That word or phrase is a palindrome.")
} else {
  alert("That word or phrase is not a palindrome.")
}