

console.log(`Function to count total number characters 'a' or 'A' in strings and return the count`);
console.log(``);

function countCharA(str){
    console.log(`String : ${str}`);
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        var char = str.charAt(index); // 
        if (char == 'a' || char == 'A') {
            count++;
        }
    }
    return count;
}
let str1 = countCharA("I AM Learning JavaScript, The Language of internet")
console.log(`Number of character 'a' or 'A' in string : ${str1}`);
console.log(``);

let str2 = countCharA("My favourite movie is LAggAn");
console.log(`Number of character 'a' or 'A' in string : ${str2}`);
