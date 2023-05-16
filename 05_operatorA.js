


console.log(`1. Write a normal function in such a way that it should accept one string value as argument.`);

function squareOfWordLength(str){
    console.log(`Word : ${str}  |  Length of word : ${str.length}  | Square of ${str.length} : ${str.length*str.length}`);
}
console.log(`1.1. Find the length of word and return it's length square.`);
console.log(`1.2. Invoke or call this function for values one by one.`);
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");
console.log(``);

console.log(`2. Given a string "I am Angular Developer" write a function with no arg and no return value.`);
console.log(`2.1. Find the string length and divide by total number words available in that string. Log the result on console.`);
console.log(`2.2. Find the string length and multiple by the total words available in string.`);
function strfun(){
    var str = "I am Angular Developer";
    var strLength = str.length;
    var words = str.split(" ");
    console.log(`String : ${str}`);
    console.log(`String Length : ${strLength}`);
    console.log(`Number of words in string : ${words.length}`);
    console.log(`Division : ${strLength / words.length}`);
    console.log(`Multipication : ${strLength * words.length}`);
}
strfun();



