// Assignment Code
var generateBtn = document.querySelector("#generate");

//Array of options for password criteria
var passLowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    passUppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    passNumbers = [1,2,3,4,5,6,7,8,9,0];
    passSpecial = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];


function generateOptions() {

  var length = parseInt(prompt("How many characters would you like the password to be?"))

//no password less than 8 characters
if (length < 8) {
  alert('The password must be at least 8 characters!');
  return;
}

//no password more than 128 characters
if (length > 128) {
  alert('The password must be less than 128 characters!');
  return;
}

for (var i = userInput; userInput < 8 || userInput > 128; userInput = prompt('How many characters would you like your password to contain?')) {
  alert('Password must be at least 8 characters but less than 128 characters.');

var includeLowercase = confirm("Do you want to include lowercase characters?");
var includeUppercase = confirm("Do you want to include uppercase characters?");
var includeNumbers = confirm("Do you want to include numbers?");
var includeSpecialChars = confirm("Do you want to include special characters?")

if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
  alert("Your password must contain at least one special, numeric, lowercase, or uppercase character");
  return;
}

var questionOptions = {
length: length,
lowerCase: includeLowercase,
numbers: includeNumbers,
specialCharacters: includeSpecialChars
}

return questionOptions;

}


// var passLength = window.prompt("How many characters would you like the password to be?");
//   if (passLength)

//     passLowercase = window.prompt("Would you like to include lowercase letters?");
//     passUppercase = window.prompt("Would you like to include uppercase letters?");
//     passNumbers = window.prompt("Would you like to include numbers?");
//     passSpecial = window.prompt("Would you like to include special characters?");


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

  var options = generateOptions();
  console.log(options)

  var passwordPool = [];
  console.log(passwordPool)

  if (options.lowerCase) {
    for (i = 0; i < passLowercase; ++i) {
    passwordPool.push(onlyLower[i]);
    }
}
if (options.upperCase) {
  for (i = 0; i < passUppercase.length; ++i) {
  passwordPool.push(onlyUpper[i]);
  }
}
  if (options.numeric) {
      for (i = 0; i < passNumbers.length; ++i) {
      passwordPool.push(onlyNumeric[i]);
      }
  }
  if (options.specialCharacters) {
    for (i = 0; i < passSpecial.length; ++i) {
        passwordPool.push(onlySpecial[i]);
    }
} 

var finalPassword = [];

for (let i = 0; i < options.length; ++i) {
    var randomPicker = Math.floor(Math.random() * Math.floor(passwordPool.length));
     finalPassword.push(passwordPool[randomPicker])
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
