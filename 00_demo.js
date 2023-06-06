

const word = "Sweety can dance";
let words = word.split(" ");
console.log(`Number of words = ${words.length}`);

let array = [4, 5, 7, 8, 9];
array.splice(1, 2);
console.log(array);


const array1 = [4, 5, 7, 8, 9];
const array2 = [];
array1.forEach((element) => {
    if(element % 2 == 0){
        array2.push(element);
    }
})
console.log(array2);

