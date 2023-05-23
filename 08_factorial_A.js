


console.log(`Function to find Factorial of given number`);
console.log(``);
function factorialOfNum(num) {
    console.log(`Number = ${num}`);
    let fact = 1;
    if (num == null || num == undefined || isNaN(num) == true || typeof num != "number") {
        return 'Invalid Input';
    } else {
        if (num == 0) {
            return 1;
        } else {
            for(let index = num; index >= 1; index--){
                fact = fact * index;
            }
            return fact;
        }
    }
}
console.log(`Factorial = ${factorialOfNum(5)}`);
console.log(``);
console.log(`Factorial = ${factorialOfNum(3)}`);
console.log(``);
console.log(`${factorialOfNum(null)}`);
console.log(``);
console.log(`Factorial = ${factorialOfNum(8)}`);
console.log(``);
console.log(`${factorialOfNum(undefined)}`);
console.log(``);
console.log(`Factorial = ${factorialOfNum(9)}`);
console.log(``);
console.log(`Factorial = ${factorialOfNum(0)}`);