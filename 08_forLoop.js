


for (let index = 0; index <= 10; index++) { // index = 11
    console.log(index); // 0 1  2 ... 10 
}
console.log("After loop");

//WAP to get table of 5
console.log(`------------------5 table---------------------`);
for(let index = 5; index <= 50; index= index + 5){
    console.log(index);
}


//WAP to get 100 to 80 in reverse order by decrementing 1
console.log(`-------------100 to 80-----------`);
for(let index = 100; index >=80; index--){
    console.log(index);
}

console.log(`------------------17 table---------------------`);
for (let index = 17; index <= 170; index= index + 17){
    console.log(index);
}

//WAP to get the table of 19 in reverse order
console.log(`------------------19 table in reverse order---------------------`);
for (let index = 190; index >=19; index = index - 19){
    console.log(index);
}
    
// WAP to get the table of 8
console.log(`------------------8 table---------------------`);
for(let index = 8; index <=80; index = index + 8){
    console.log(index);
}

// JavaScript = J a v a S c r  i  p  t
console.log(`Traverse through the string ${str}`);
var str = "JavaScript";
for(let index = 0; index < str.length; index++){
    console.log(str.charAt(index));
}

//WAP to reverse the string --> JavaScript : tpircSavaJ
console.log(`Traverse through the string ${str} in reverse order`);
var str = "JavaScript";
var reverseStr = "";
for(let index = str.length-1; index >= 0; index--){
    var char = str.charAt(index);
    reverseStr = reverseStr.concat(char);
}
console.log(reverseStr);
