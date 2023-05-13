


console.log(`1. Write a function expression to get square of the number Ex -> 5, 6, 25, 100`);
var square = function(num){
    console.log(`Square of ${num} : ${num*num}`);
}
square(5);
square(6);
square(25);
square(100);
console.log(``);

console.log(`2. Check and log type of function (Hint -> typeof variableName)`);
console.log(`Type of variable used for FE : ${typeof square}`);
console.log(``);

console.log(`3. Write a FE to get the area of rectangle plot [length = 499 and width =  917]`);
var area = function(length, width){
    console.log(`Area of rectangle plot with length ${length} and width ${width} : ${length*width}`);
}
area(499, 917);
console.log(``);

console.log(`4. Write a FE with two args and should swap the passed values and log on console before swap and after swap values inside function itself.`);
var swapValues = function(value1, value2){
    console.log(`Before Swap, 1st value : ${value1} | 2nd value : ${value2}`);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log(`After Swap,  1st value : ${value1} | 2nd value : ${value2}`);
}

console.log(`A. Invoke or call the function with values "Virat" and "Anushka"`);
swapValues("Virat" , "Anushka");
console.log(`-----------------------------------------------------------`);

console.log(`B. Invoke or call the function with values 1000 and 2000`);
swapValues(1000, 2000);
console.log(``);

console.log(`5. Write a FE which can perform the below steps for string "JS the most popular language of internet"`);
var strMethods = function(){
    var str = "JS the most popular language of internet";

    console.log(`A. Find the total character available in the string`);
    console.log(`Total characters in the string : ${str.length}`); 
    console.log(`-----------------------------------------------------------`);   

    console.log(`B. Find the character at index 6`);
    console.log(`Character at index 6 : ${str.charAt(6)}`);
    console.log(`-----------------------------------------------------------`);

    console.log(`C. Find the character at index 11`);
    console.log(`Character at index 11 : ${str.charAt(11)}`);
    console.log(`-----------------------------------------------------------`);

    console.log(`D. Find the last character using length property`);
    console.log(`Character at last : ${str.charAt(str.length-1)}`);
    console.log(`-----------------------------------------------------------`);

    console.log(`E. Find the very first character from the given string`);
    console.log(`Character at first : ${str.charAt(0)}`);
    console.log(`-----------------------------------------------------------`);

    console.log(`F. Find the total number words of the given string and then calculate the square of it and log it.`);
    var words = str.split(" ");
    var noOfWords = words.length;
    console.log(`Total number of words in string : ${noOfWords}`);
    console.log(`Square of ${noOfWords} : ${noOfWords*noOfWords}`);

}
strMethods();
console.log(``);