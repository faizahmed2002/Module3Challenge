// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userinput = window.prompt("Random Password")
  var PasswordLength = parseInt(userinput)

  if(isNaN(PasswordLength)) {
    window.alert("That is not a number")
    return
  } 

  
  
  

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
