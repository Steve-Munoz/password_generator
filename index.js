//  Introduction
//  The reason for this javascript is to genereate a random passwords based on what user selected - criteria.

//  I will start off by creating FOUR different FUNCTIONS FOR the following
// password length

// If user wants uppercase letters-FUNCTION
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper());
// If user wants lowercase letters-FUNCTION
// If user wants to include numbers-FUNCTION
// If user wants to include symbols-FUNCTION

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
