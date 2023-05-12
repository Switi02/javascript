

var greet = "Good Morning";
console.log("String :", greet);
var greetLength = greet.length;
console.log("Total number of characters in given string :", greetLength);

var charAtZeroIndex = greet.charAt(0);
console.log("Character at 0 Index :", charAtZeroIndex);

var charAtLastIndex = greet.charAt(greet.length-1);
console.log("Character at Last Index :", charAtLastIndex);

var indexOfM = greet.indexOf("M");
console.log("Index of char M :", indexOfM);
var indexOfO = greet.indexOf("o");
console.log("Index of char o :", indexOfO);

var replaceValue = greet.replace("Morning", "Afternoon");
console.log("String :", replaceValue);


console.log("____________________________________________________");
var firstName = "Sweety";
var lastName = " Lulla";
console.log("First Name :", firstName);
console.log("Last Name :", lastName);
var concatStr = firstName.concat(lastName);
console.log("Concatanation string :", concatStr);

console.log("____________________________________________________");

var firstName = "  Sweety      ";
var trimmedFirstName = firstName.trim();
var lengthAfterTrim = trimmedFirstName.length;
console.log("Before Trim Length :", firstName.length);
console.log("After Trim firstName is :", trimmedFirstName , lengthAfterTrim);
var trimmedSpaces = firstName.length - lengthAfterTrim;
console.log("Total Trimmed spaces :", trimmedSpaces);



console.log("____________________________________________________");

var firstName = "Sweety";
console.log("String :", firstName);
var strlength = firstName.length;
console.log("Total number of characters in given string :", strlength);


