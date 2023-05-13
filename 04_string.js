

var greet = "Good Morning";
console.log("String :", greet);
var greetLength = greet.length;
console.log("Total number of characters in given string :", greetLength);

var charAtZeroIndex = greet.charAt(0);
console.log("Character at 0 Index :", charAtZeroIndex);
console.log("Character at 20 Index :", greet.charAt(20));

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

console.log("____________________________________________________");


var greet = "Good Morning";
var includeResult = greet.includes("ing");
console.log("Is ing string available inside : ", includeResult);

var searchResult = greet.search("Mor");
console.log("Search result : ", searchResult);

var sliceResult = greet.slice(4, 6);
console.log("Slice Result is: ", sliceResult);

var subStringResult = greet.substring(4, 6);
console.log("Substring result is: ", subStringResult);

var greet = "Good Morning mate, How are you";
var resultSplit = greet.split(" ");
console.log(resultSplit);
console.log("Total number of words: ",resultSplit.length);

var resultSplit = greet.split(",");
console.log(resultSplit);
console.log("Total number parts: ",resultSplit.length);

var resultSplit = greet.split("");
console.log(resultSplit);
console.log("Total number of words: ",resultSplit.length);