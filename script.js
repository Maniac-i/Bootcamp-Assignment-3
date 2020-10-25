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

// Add event listner to generate password
generateBtn.addEventListener("click", newPassword);

var password = "";
var specialCharacters = "`~!@$%^&*()_-[]{}|?/.,<>+=;:' ";
var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789"



function newPassword() {

  passwordLength = prompt("Enter a password lenght between 8 and 128");
  passwordLowerCase = confirm("Do you want to use lowercase letters");
  passwordUpperCase = confirm("Do you want to use uppercase letters");
  passwordNumbers = confirm("Do you want to use numbers");
  passwordspecial = confirm("Do you want to use special characters");

for (var i = 0; i <= passwordLength; i++) {

  if (passwordLowerCase === true && passwordUpperCase === true )


}
}