

const fibonacci = function(num) {
    let n1 = 0;
    let n2 = 1;
    let next = 0;
    console.log(`Fibonacci Series upto ${num} Numbers :`);
    console.log(n1);
    console.log(n2);
    for(let index = 2; index < num; index++){
        next = n1 + n2;
        n1 = n2;
        n2 = next;
        console.log(next);
    }
    
}
fibonacci(11);