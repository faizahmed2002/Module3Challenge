// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var random = Math.random();
  return Math.floor(min * (1 - random) + random * max);
}

function getRandomItem(list) {
  return list[randomInt(list.length)];
}

function generatePassword() {
  var userinput = window.prompt("How long do you want your password to be?");
  var PasswordLength = parseInt(userinput);

  if (isNaN(PasswordLength)) {
    window.alert("That is not a number!");
    return;
  }

  if (PasswordLength < 8 || PasswordLength > 128) {
    window.alert("password length must be between 8 and 128 characters");
    return;
  }

  var userWantsNumbers = window.confirm(
    "Would you like to include numbers in your password?"
  );
  var userWantsSymbols = window.confirm(
    "Would you like to include symbols in your password?"
  );
  var userWantsLowerCase = window.confirm(
    "Would you like to include lower case letters in your password?"
  );
  var userWantsCapitalLetters = window.confirm(
    "Would you like to include capital letters in your password?"
  );


  var numberlist = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  var Symbollist = ("!", "_", "+", "@", "#", "~");
  var lowercaselist =
    ("a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z");
  var capitalletterslist = [];

  var optionscart = [];

  for (var i = 0; i < lowercaselist.length; i++) {
    capitalletterslist[i] = lowercaselist[i].toLocaleUpperCase();
  }

  if (userWantsNumbers === true) {
    optionscart.push(numberlist);
  }

  if (userWantsSymbols === true) {
    optionscart.push(Symbol);
  }

  if (userWantsLowerCase === true) {
    optionscart.push(lowercaselist);
  }

  if (userWantsCapitalLetters === true) {
    optionscart.push(capitalletterslist);
  }

  if (optionscart.length === 0) {
    optionscart.push(numberlist);
  }

  var generatedpassword = "";

  for (var i = 0; i < PasswordLength; i++) {
    var randomlist = getRandomItem(optionscart);
    var randomchar = getRandomItem(randomlist);
    generatedpassword += randomchar;
  }

  return generatedpassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
