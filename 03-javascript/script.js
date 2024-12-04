

// function generatePassword() {
//   // Prompt user for password length
//   let passwordLength = parseInt(prompt("Enter password length (between 8 and 128):"));
  
//   // Check if the  password length is valid
//   if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
//     // Notify user of invalid input and exit the function
//     alert("Invalid input. Plaese enter a number between 8 and 128.");
//     return "";
//   }
//   // "Only ask about character types if the length is correct."
//   let includeUpperCase = confirm("Include uppercase letters?");
//   let includeLowerCase = confirm("Include lowercase letters?");
//   let includeNumber = confirm("Include number?");
//   let includeSpecialCharacter = confirm("Include special characters?");

//   // Check if a least one character type is selected
//   if (
//     !includeUpperCase &&
//     !includeLowerCase &&
//     !includeNumber &&
//     !includeSpecialCharacter
//   ) {
//     alert("At least one characters type must be selected.");
//     return "";// Exit function if no character types are selected
//   }
//   // Generate the password based on the selected option
//   let availableChar = "";
//   if (includeUpperCase) {
//     availableChar +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   }
//   if (includeLowerCase) {
//     availableChar += "abcdefghijklmnopqrstuvwxyz";
//   }
//   if (includeNumber) {
//     availableChar += "1234567890";
//   }
//   if (includeSpecialCharacter) {
//     availableChar +="!@#$%^&*()_+-=[]{}|;:,.<>?";
//   }
//   // Generate the password
//   let password = "";
//   for (let i = 0; i < passwordLength; i++){
//     let randomIndex = Math.floor(Math.random() * availableChar.length);
//     password += availableChar.charAt(randomIndex);
//   }
    

//   return password;

// }
    // Event listene to generate password when button is clicked

function generatePassword() {
  // Ask user for password length
  let passwordLength = parseInt(prompt("Enter password length (between 8 and 128):"));

  // Check if the input is valid
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    // Notify user of invalid input and exit the function
    alert("Invalid input.Please enter a number between 8 and 128.");
    return "";     
  }
  // Proceed to ask for character types only if password length is valid
  let includeUpperCase = confirm("Include uppercase letters?");
  let includeLowerCase = confirm("Include lowercase letters?");
  let includeNumber = confirm("Include lowercase?");
  let includeSpecialCharacter = confirm("Include special characters?");

//  Checked if at least one character type is selected

  if (
    !includeUpperCase &&
    !includeLowerCase &&
    !includeNumber &&
    !includeSpecialCharacter
  ) {
    alert("At least one character type must me selected.");
    return "";
    // Exit function if no character types are selected
  }
  // Generate the password based on the selected option
  let availableChar = ""
  if (includeUpperCase) {
    availableChar +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeLowerCase) {
    availableChar +="abcdefghijklmnopqrstuvwxyz";
  }
  if (includeNumber) {
    availableChar +="1234567890";
  }
  if (includeSpecialCharacter) {
    availableChar +="!@#$%^&*()_+-=[]{}|;:,.<>?";
  }
  // Generate the password
  for (let i = 0; i < passwordLength; i++){
    let randomIndex = Math.floor(Math.random() * availableChar.length);
    password += availableChar.charAt(randomIndex);
  }
  return password;
  }


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
});





// function makePassword() {
//   // Ask user for password length
//   let passwordLength = prompt("Enter password length (8-128):");
//   passwordLength = Number(passwordLength); // Convert to number

//   // Check if the input is valid
//   if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
//     alert("Please enter a valid number between 8 and 128.");
//     return ""; // Exit the function
//   }

//   // Ask user about character types
//   const useUpper = confirm("Include UPPERCASE letters?");
//   const useLower = confirm("Include lowercase letters?");
//   const useNumbers = confirm("Include numbers?");
//   const useSpecial = confirm("Include special characters?");

//   // If no character types selected, show an alert and exit
//   if (!useUpper && !useLower && !useNumbers && !useSpecial) {
//     alert("You must select at least one character type.");
//     return ""; // Exit the function
//   }

//   // Define character sets
//   const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const lowerCase = "abcdefghijklmnopqrstuvwxyz";
//   const numbers = "0123456789";
//   const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

//   let availableChars = "";
//   if (useUpper) availableChars += upperCase;
//   if (useLower) availableChars += lowerCase;
//   if (useNumbers) availableChars += numbers;
//   if (useSpecial) availableChars += specialChars;

//   // Generate password
//   let password = "";
//   for (let i = 0; i < passwordLength; i++) {
//     const randomIndex = Math.floor(Math.random() * availableChars.length);
//     password += availableChars[randomIndex];
//   }

//   return password;
// }

// // Listen for button click and generate password
// document.querySelector("#generate").addEventListener("click", function () {
//   const password = makePassword(); // Use the new function name
//   document.querySelector("#password").value = password; // Show password in input box
// });




// // Event listener to generate password when button is clicked
// var generateBtn = document.querySelector("#generate");
// generateBtn.addEventListener("click", function () {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// });