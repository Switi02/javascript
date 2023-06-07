

const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(arrayNumbers);
console.log(``);

console.log(`1. Find out all the numbers which are greater than 50 and log on console`);
const greaterThan50 = arrayNumbers.filter((num) =>{
    return num > 50;
})
console.log(greaterThan50);
console.log(``);

console.log(`2. Find out all the even numbers and log on console`);
const evenNumbers = arrayNumbers.filter((num) =>{
    return num % 2 == 0;
})
console.log(evenNumbers);
console.log(``);

console.log(`3. Find out all the odd numbers and log on console`);
const oddNumbers = arrayNumbers.filter((num) =>{
    return num % 2 != 0;
})
console.log(oddNumbers);
console.log(``);

console.log(`4. Find out all the numbers which are multiple of 5`);
const multipleOf5 = arrayNumbers.filter((num) =>{
    return num % 5 == 0;
})
console.log(multipleOf5);
console.log(``);

console.log(`5. Find out all numbers which are between 20 and 50`);
const numBet20And50 = arrayNumbers.filter((num) =>{
    return (num > 20 && num < 50);
})
console.log(numBet20And50);
console.log(``);