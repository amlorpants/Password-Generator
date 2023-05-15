// Assignment code here


// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordOptions = createPasswordOptions();
}

function createPasswordOptions() {
var passwordLength = prompt(
  'How long would you like your password to be? (Must be 10 - 128 characters in length)'
);

if (passwordLength < 10 || passwordLength > 128) {
alert(
'please try again, password length must be 10 - 128 characters in length'
);
return null;
}

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
