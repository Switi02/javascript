

const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log("Array Numbers : ", arrayNumbers);
console.log(``);

console.log(`1. Find the total elements available or length and log on console`);
console.log(`Total Number of elements in given array : ${arrayNumbers.length}`);
console.log(``);

console.log(`2. Log the first element and last element in arrayNumbers and log on console`);
console.log(`First Element : ${arrayNumbers[0]}`);
console.log(`Last Element : ${arrayNumbers[arrayNumbers.length-1]}`);
console.log(``);

console.log(`3. Log the third last element using length property and log on console`);
console.log(`Third Last Element : ${arrayNumbers[arrayNumbers.length-3]}`);
console.log(``);

console.log(`4. Find the all even numbers using for in loop and log on console`);
let arrayEvenNumbers = [];
for (const index in arrayNumbers) {
    if(arrayNumbers[index] % 2 == 0){
        arrayEvenNumbers.push(arrayNumbers[index]);
    }
}
console.log("Even Numbers in Array : " ,arrayEvenNumbers);
console.log(``);

console.log(`5. Find the odd numbers for in loop and log on console`);
let arrayOddNumbers = [];
for (const index in arrayNumbers) {
    if(arrayNumbers[index] % 2 != 0){
        arrayOddNumbers.push(arrayNumbers[index]);
    }
}
console.log("Odd Numbers in Array : " ,arrayOddNumbers);
console.log(``);

console.log(`6. Find all the even positioned elements from arrayNumbers, sum it and log on console`);
let evenPositionedElements = [];
let evenSum = 0;
for (const index in arrayNumbers) {
    if(index % 2 == 0){
        evenPositionedElements.push(arrayNumbers[index]);
        evenSum = evenSum + arrayNumbers[index];
    }
}
console.log("Even Positioned Elements in Array : ", evenPositionedElements);
console.log(`Sum of Even Positioned Elements from Array : ${evenSum}`)
console.log(``);


console.log(`7. Find all the odd positioned elements from arrayNumbers, sum it and log on console`);
let oddPositionedElements = [];
let oddSum = 0;
for (const index in arrayNumbers) {
    if(index % 2 != 0){
        oddPositionedElements.push(arrayNumbers[index]);
        oddSum = oddSum + arrayNumbers[index];
    }
}
console.log("Odd Positioned Elements in Array : ", oddPositionedElements);
console.log(`Sum of Odd Positioned Elements from Array : ${oddSum}`)
console.log(``);

console.log(`8. Find the sum of all elements from arrayNumbers, log on console`);
let allSum = 0;
for (const element of arrayNumbers) {
    allSum = allSum + element;
}
console.log(`Sum of all Elements from Array : ${allSum}`);
console.log(``);

console.log(`9. Find the numbers which are multiple of 5`);
let multipleOfFive = [];
for (const element of arrayNumbers) {
    if (element % 5 == 0) {
        multipleOfFive.push(element);
    }
}
console.log("Numbers which are multiple of 5 : ", multipleOfFive);
console.log(``);

console.log(`10. Is number 115 available in arrayNumbers ?`);
console.log(`${arrayNumbers.includes(115)}`);
console.log(``);

console.log(`11. Is number 23 available in arrayNumbers ?`);
console.log(`${arrayNumbers.includes(23)}`);
console.log(``);

console.log(`12. Insert numbers → 55, 66 before index 3 and log array on console`);
arrayNumbers.splice(3, 0, 55, 66);
console.log("Updated Array Numbers: ", arrayNumbers);
console.log(``);


console.log(`13. Delete 3 elements starting from index 4 and log arrayNumbers on console`);
arrayNumbers.splice(4, 3);
console.log("Updated Array Numbers: ", arrayNumbers);
console.log(``);
