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


function newPassword() {

  passwordLength = prompt("Enter a password lenght between 8 and 128");
  passwordLowerCase = confirm("Do you want to use lowercase letters");
  passwordUpperCase = confirm("Do you want to use uppercase letters");
  passwordNumbers = confirm("Do you want to use numbers");
  passwordspecial = confirm("Do you want to use special characters");


}