


console.log(`Function to find Factorial of given number`);
// 5! = 5 * 4 * 3 * 2 * 1
function factorial(num){
    if (num == 0) {
        console.log(`Factorial of 0 = 1`);
        console.log(``);
        return;
    }
let factorial = 1; // 120
for (let index = num; index >= 1; index--) { // index = 5  4  3  2  1  0
    factorial = factorial * index; // 120 * 1 
}
console.log(`Factorial of ${num} = ${factorial}`);
console.log(``);
}
factorial(5);
factorial(10);
factorial(0);
factorial(7);
