// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Variables for character sets
var passwordString = "";
var specialCharacters = "`~!@$%^&*()_-[]{}|?.,<>+=;:";
var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789"
var charSet = "";

//Picks random character from character set and adds it to the passwordString
function pickRandom() {
  passwordString += charSet.charAt(Math.floor(Math.random() * charSet.length));
}

//Determines character set for the password
function characaterSet() {

  if (passwordLowerCase === true){
    charSet += lowerAlpha;
  } if (passwordUpperCase === true) {
    charSet += upperAlpha;
  } if (passwordNumbers === true) {
    charSet += numbers;
  } if (passwordSpecial === true) {
    charSet += specialCharacters;
  }

}


//Generates password
function generatePassword() {

  //Gets password criteria from user
  passwordLength = prompt("Enter a password lenght between 8 and 128");
  passwordLowerCase = confirm("Do you want to use lowercase letters");
  passwordUpperCase = confirm("Do you want to use uppercase letters");
  passwordNumbers = confirm("Do you want to use numbers");
  passwordSpecial = confirm("Do you want to use special characters");
  
  characaterSet();

for (var i = 0; i < passwordLength; i++) {

    pickRandom();

  }
  return passwordString;
}