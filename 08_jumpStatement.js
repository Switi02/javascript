


// 1 to 10
for(let index = 0; index <= 10; index++){
    console.log(`${index}`);
    //index == 5
    if(index == 5){
        break;
    }
}
console.log(`End loop`);
console.log(``);


// 1 to 10
var iteration = 0;
for(let index = 1; index <= 10; index++){
    iteration++;
    console.log(`Iteration starts : ${iteration}`);
    console.log(`${index}`);
    //index == 5
    if(index == 5){
        continue;
    }
    console.log(`Iteration ends : ${iteration}`);
}
console.log(`End loop`);