


console.log(`1. An Arrow function with no args and no return value.`);
let msg = () => {
    console.log(`Good Morning, Today is Monday`);
}
msg();
console.log(``);

console.log(`2. An Arrow function with 3 args and no return value, for received 3 parameters perform the multiplication`);
let multiply = (n1, n2, n3 = 1) => {
    console.log(`Multiplication : ${n1} * ${n2} * ${n3} = ${n1 * n2 * n3}`);
}
multiply(5, 5, 2);
multiply(10, 4);
console.log(``);

console.log(`3. An Arrow function with 5 args and return value such as, for received params it should do the addition `);
let add = (n1, n2, n3, n4, n5) => {
    console.log(`Add : ${n1} + ${n2} + ${n3} + ${n4} + ${n5}`);
    return n1 + n2 + n3 + n4 + n5;
}
let add1 = add(100, 100, 200, 349, 756);
console.log(`Addition = ${add1}`);
let add2 = add("I am", " learning", " ES6", " features", " in depth");
console.log(`Concatination = ${add2}`);

