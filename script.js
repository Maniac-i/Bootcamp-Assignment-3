//Variables for character sets
var passwordString = "";
var specialCharacters = "`~!@$%^&*()_-[]{}|?.,<>+=;:";
var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789"
var charSet = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");
var clearBtn = document.querySelector("#clear");

// Write password to the #password input
function writePassword() {
  passwordLength = prompt("Enter a password length between 8 and 128");
  
  //Dont generate password if a number between 8 and 128 isnt entered
  if (passwordLength === null || passwordLength < 8 || passwordLength > 128) {
    alert("You didnt enter a number between 8 and 128");
  } else {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}

//Add event listener to Clear Password button to clear password
clearBtn.addEventListener("click", () => {
  document.getElementById("password").value = "";
  charSet = "";
  passwordString = "";
})

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Picks random character from character set and adds it to the passwordString
function pickRandom() {
  passwordString += charSet.charAt(Math.floor(Math.random() * charSet.length));

}

//Determines character set for the password
function characaterSet() {

    if (passwordLowerCase === true) {
    charSet += lowerAlpha;
  } if (passwordUpperCase === true) {
    charSet += upperAlpha;
  } if (passwordNumbers === true) {
    charSet += numbers;
  } if (passwordSpecial === true) {
    charSet += specialCharacters;
  } else if (passwordLowerCase === false && passwordUpperCase === false && passwordNumbers === false && passwordSpecial === false) {
    alert("Choose at least one citeria");

  }

}

//Generates password
function generatePassword() {

  //Gets password criteria from user
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