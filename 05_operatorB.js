


console.log(`1. Find the greater number amongst two numbers.`);
var greaterNumber = function(num1, num2){
    console.log(`Number1 : ${num1}  |  Number2 : ${num2}`);
    var result = num1 > num2 ? `${num1} is GREATER` : `${num2} is GREATER`;
    console.log(result);
}
greaterNumber(10, -10);
greaterNumber(800, 899);
console.log(``);


console.log(`2. Check Even or Odd Numbers : 29, 44, 0, 101 `);
var isEvenOrOdd = function (num) {
    var result = num % 2 == 0  ? `${num} is EVEN` : `${num} is ODD`;
    return result;   
}
var returnValue = isEvenOrOdd(29);
console.log(returnValue);
var returnValue = isEvenOrOdd(44);
console.log(returnValue);
var returnValue = isEvenOrOdd(0);
console.log(returnValue);
var returnValue = isEvenOrOdd(101);
console.log(returnValue);
console.log(``);

console.log(`3. Check which word has even or odd length.`);
var wordLength = function(word){
    console.log(`Word : ${word}  |  Word Length : ${word.length}` );
    var result = word.length % 2 == 0 ? `${word} has EVEN word length` : `${word} has ODD word length`;
    return result;
}
var returnValue = wordLength("JavaScript");
console.log(returnValue);
var returnValue = wordLength("developer");
console.log(returnValue);
var returnValue = wordLength("Google");
console.log(returnValue);