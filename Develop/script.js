// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userinput = window.prompt("How long do you want your password to be?")
  var PasswordLength = parseInt(userinput)

  if(isNaN(PasswordLength)) {
    window.alert("That is not a number!")
    return
  } 

  if (PasswordLength < 8 || PasswordLength > 128 ) {
    window.alert("password length must be between 8 and 128 characters")
    return  
  }

  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
  var userWantsSpecialCharacters = window.confirm("Would you like to include special characters in your password?")
  var userWantsLowerCase = window.confirm("Would you like to include lower case in your password?")
  var userWantsCapitalLetters = window.confirm("Would you like to include capital letters in your password?")
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
