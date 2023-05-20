


console.log(`1. Function to count total number of vowels in string`);
function noOfVowels(str){
    console.log(`String = ${str}`);
    var count = 0;
    for(let index = 0; index < str.length; index++){
        var char = str.charAt(index);
        if (char == 'a' || char =='e' || char =='i' || char == 'o' || char =='u' || 
        char =='A' || char =='E' || char =='I' || char =='O' || char =='U') {
            count++;
         }
    }
    console.log(`Number of vowels in string = ${count}`);
    console.log(``);
}
noOfVowels("I am very good IT Developer")

console.log(`2. Function to get the sum of cube of numbers from 1 to 5.`);
function sumOfCubes(){
    var sum = 0;
    for(let index = 1; index<=5; index++){
        var cube = index ** 3 ;
        sum = sum + cube;
    }
    console.log(`Sum of cube of numbers from 1 to 5 = ${sum}`);
    console.log(``);
}
sumOfCubes();

console.log(`3. Function oddPositionedChars() to log odd positioned chars on console without considering empty spaces`);
function oddPositionedChars(str){
    console.log(`String : ${str}`);
    var oddChars = "";

    for(let index = 0; index < str.length; index++){
        var char = str.charAt(index);
        if (index % 2 != 0 && char != " ") {
            oddChars = oddChars.concat(char);
        }
    }
    console.log(`Odd Positioned Characters of String are : ${oddChars}`);
    console.log(``);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT Champ");

