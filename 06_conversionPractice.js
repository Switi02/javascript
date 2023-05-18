


console.log(`Implicit conversion to String`);
// numeric string used with + gives string type
var result;

result = '3' + 2;
console.log(`'3' + 2 = ${result}`); // "32"

result = '3' + true;
console.log(`'3' + true = ${result}`); // "3true"

result = '3' + undefined;
console.log(`'3' + undefined = ${result}`); // "3undefined"

result = '3' + null;
console.log(`'3' + null = ${result}`); // "3null"

console.log(`Implicit boolean conversion to Number`);
// if boolean is used, true is 1, false is 0

result = '4' - true;
console.log(`'4' - true = ${result}`);

result = 4 + true;
console.log(`4 + true = ${result}`);

result = 4 + false;
console.log(`4 + false = ${result}`);

console.log(`Implicit string conversion to Number`);
// numeric string used with -, /, * results number type

result = '4' - '2' ;
console.log(`'4' - '2' = ${result}`);

result = '4' - 2;
console.log(`'4' - 2 = ${result}`);

result = '4' * 2;
console.log(`'4' * 2 = ${result}`);

result = '4' / 2;
console.log(`'4' / 2 = ${result}`);

console.log(`Undefined used with number, boolean or null gives NaN`);
//Arithmetic operation of undefined with number, boolean or null gives NaN

result = 4 + undefined;
console.log(`4 + undefined = ${result}`);

result = 4 - undefined;
console.log(`4 - undefined = ${result}`);

result = true + undefined;
console.log(`true + undefined = ${result}`);

result = null + undefined;
console.log(`null + undefined = ${result}`);

console.log(`Explicit conversion: Convert number strings and boolean values to numbers.`);
//string to number

result = Number('324');
console.log(`Number('324') = ${result}`);

result = Number('324e - 1');
console.log(`Number('324e - 1') = ${result}`);

//boolean to number
result = Number(true);
console.log(`Number(true) = ${result}`);

result = Number(false);
console.log(`Number(false) = ${result}`);

console.log(`Explicit conversion: Invalid string to number return NaN`);

result = Number('hello');
console.log(`Number('hello') = ${result}`);

result = Number(undefined);
console.log(`Number(undefined) = ${result}`);

result = Number(NaN);
console.log(`Number(NaN) = ${result}`);

console.log(`Explicit conversion : string to number using + operator`);

var numberInString = "100";
console.log(`Variable = "100"`);
console.log(`Type of variable = ${typeof numberInString}`)
var myNumber = +numberInString;
console.log(`Type of variable = ${typeof myNumber}`);

console.log(`Explicit conversion : number to string data type using toString() method`);

var myNumber = 100;
console.log(`Variable = 100`);
console.log(`Type of variable = ${typeof myNumber}`);
var afterConvesion = myNumber.toString();
console.log(`Type of variable = ${typeof afterConvesion}`);


console.log(`Assignment : 0C`);
console.log(`1. Check out few interesting fact and log result on the console with reason:`);

console.log(`0 == '' : ${0 == ''}`);

console.log(`0 =='0' : ${0 =='0'}`);

console.log(`0 == false : ${0 == false}`);

console.log(`null == undefined : ${null == undefined}`);

console.log(`1 == [1] : ${1 == [1]}`);

console.log(`1 == true : ${1 == true}`);

console.log(`1 == '1' : ${1 == '1'}`);
