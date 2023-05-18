const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specialCharacters = '@%+/,!#$^?:)(}{][~-_.';
const numbers = '1234567890';

var desiredLength = null;
let acceptableCharacters = '';

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

//  produce console logs throughout the doc to check where it is breaking

function generatePassword() {
  // sets length and acceptable characters
  getPasswordOptions();

  // generates random password
  let result = '';
  const charactersLength = acceptableCharacters.length;
  for (let i = 0; i < desiredLength; i++) {
    result += acceptableCharacters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }

  // returns generated password
  return result;
}

// password length function
function promtPasswordLength() {
  var passwordLength = prompt(
    'How long would you like your password to be? (Must be 10 - 128 characters in length)'
  );

  const lengthIsInvalid = passwordLength < 8 || passwordLength > 128;

  if (lengthIsInvalid) {
    alert(
      'please try again, password length must be 8 - 128 characters in length'
    );
  } else {
    desiredLength = passwordLength;
  }
}

// lowercase function
function promptLowercase() {
  var passwordLowercase = confirm(
    'Would you like to include lowercase characters in your password?'
  );

  if (passwordLowercase === true) {
    acceptableCharacters = acceptableCharacters.concat(
      lowercaseCharacters
    );
  }
}

// uppercase function
function promptUppercase() {
  var passwordUppercase = confirm(
    'Would you like to include uppercase characters in your password?'
  );

  if (passwordUppercase === true) {
    acceptableCharacters = acceptableCharacters.concat(
      uppercaseCharacters
    );
  }
}

// special character function
function promptSpecialCharacters() {
  var passwordSpecialCharacters = confirm(
    'Would you like to include special characters in your password?'
  );

  if (passwordSpecialCharacters === true) {
    acceptableCharacters =
      acceptableCharacters.concat(specialCharacters);
  }
}

// number function
function promptNumeric() {
  var passwordNumeric = confirm(
    'Would you like to include numbers in your password?'
  );

  if (passwordNumeric === true) {
    acceptableCharacters = acceptableCharacters.concat(numbers);
  }
}

function scrambleString(myString) {
  return myString
    .split('')
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join('');
}

function getPasswordOptions() {
  promtPasswordLength();
  promptLowercase();
  promptUppercase();
  promptSpecialCharacters();
  promptNumeric();
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
