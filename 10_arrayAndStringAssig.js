

const arrayNums = [11, 3, 4, 11, 4, 7, 3];
console.log("Array : ", arrayNums);
console.log(`Remove duplicate elements from array`);
const newArray = [...new Set(arrayNums)];
console.log("New Array : ", newArray);
console.log(``);

const str = "How are you mate";
console.log(`String = ${str}`);
let newChar = "";
const arrayWords = str.split(" ");
for(const element of arrayWords){
    for(let index = 0; index<element.length; index++){
        let char = "";
        if(index == 0 || index == element.length-1){
            char = element[index].toUpperCase();
        } else{
            char = element[index];
        }
        newChar = newChar + char;
    }
    newChar = newChar + " ";
}
console.log(`New String = ${newChar}`);
