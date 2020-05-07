//  Introduction
//  The reason for this javascript is to genereate a random passwords based on what user selected - criteria.

// I'm going to put each one of those functions into an object called randomFunc

//  set the needed the variables
var passwordLength = 0;
var uppercase;
var lowercase;
var symbol;
var numeric;

var upperanswer = null;
var loweranswer = null;
var numericanswer = null;
var symbolanswer = null;

// Alert the user for the meaning behind the behind this page and introduce them to steps to follow
alert(" Welcome to Password Generator");
alert(" Choose the following criteria for your password");

// Determine the size of the password.

while (passwordLength > 128 || passwordLength < 8 || passwordLength === 0) {
  passwordLength = prompt(
    "How long do you want this password to be? (Must be between 8 and 128 characters)"
  );

  passwordLength = parseInt(passwordLength, 10);

  if (passwordLength <= 128 && passwordLength >= 8 && passwordLength !== NaN) {
    alert("Your password will be " + passwordLength + " characters long.");
  } else {
    alert("Please enter a valid answer.");
    passwordLength = 0;
  }
}

// Asking for the use of lower-case letters in the password.
while (lowercase !== "yes" && lowercase !== "no") {
  lowercase = prompt(
    "Do you want lower-case characters? (Please answer yes or no)"
  );
  lowercase = lowercase.toLowerCase();

  if (lowercase === "yes") {
    loweranswer = true;
  } else if (lowercase === "no") {
    loweranswer = false;
  } else {
    alert("Please enter a valid answer.");
  }
}

//  I will start off by creating FOUR different FUNCTIONS FOR the following
// password length

// If user wants uppercase letters-FUNCTION
//  fromCharCode the Upper letters begin at 65( which is why there is + 65).
function getRandomUpper() {
  prompt(" ");
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper());
// If user wants lowercase letters-FUNCTION
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());

// If user wants to include numbers-FUNCTION
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber());

// If user wants to include symbols-FUNCTION
function getRandomSymbol() {
  const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password

// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria

// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password

// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password

// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt

// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered

// THEN a password is generated that matches the selected criteria
// WHEN the password is generated

// THEN the password is either displayed in an alert or written to the page
