

const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(`1. Log the array element with its index using forEach() with arrow function`);
arrayNumbers.forEach((element, index) => {
    console.log(`Element = ${element} || Index = ${index}`);
})
console.log(``);

console.log(`2. Find the positive numbers and log on console`);
const positiveNumbers = [];
arrayNumbers.forEach((element) => {
    if(element > 0){
        positiveNumbers.push(element);
    }
})
console.log(positiveNumbers);
console.log(``);


console.log(`3. Find the negative numbers, add into new array and log new array on console using arrow function`);
const negativeNumbers = [];
arrayNumbers.forEach((element) => {
    if(element < 0){
        negativeNumbers.push(element);
    }
})
console.log(negativeNumbers);
console.log(``);

console.log(`4. Find the even numbers and log on console using forEach() with arrow function`);
const evenNumbers = [];
arrayNumbers.forEach((element) => {
    if(element % 2 == 0){
        evenNumbers.push(element);
    }
})
console.log(evenNumbers);
console.log(``);

console.log(`5. Find the sum of all elements from arrayNumbers and log on sum value on console`);
let sum = 0;
arrayNumbers.forEach((element) => {
    sum = sum + element;
})
console.log(`Sum of all elements = ${sum}`);
console.log(``);

console.log(`6. Log the only even indexed array value on console`);
const evenIndexed = [];
arrayNumbers.forEach((element, index) => {
    if(index % 2 == 0){
        evenIndexed.push(element);
    }
})
console.log(evenIndexed);
console.log(``);