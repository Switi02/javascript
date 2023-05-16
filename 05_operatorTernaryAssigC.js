

console.log(`1. Write a normal function 'maleMarriageEligibility() with args gender, age and boyName. Function should return message according to condition check.`);
function maleMarriageEligibility(gender, age, boyName){
    console.log(`Name : ${boyName}  |  Gender : ${gender}  |  Age : ${age}`);
    var result = gender == "Male" && age >= 21 ? `Hey ${boyName}, you are eligible for marriage.` : `Hey ${boyName}, you are not eligible for marriage.`
    return result;
}
var returnValue = maleMarriageEligibility("Male", 25, "Billgates");
console.log(returnValue);
var returnValue = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(returnValue);
console.log(``);


console.log(`2. Write a normal function 'femaleMarriageEligibility() with 3 arguments gender, age and girlName. Function should return message according to condition check.`);
function femaleMarriageEligibility(gender, age, girlName){
    console.log(`Name : ${girlName}  |  Gender : ${gender}  |  Age : ${age}`);
    var result = gender == "Female" && age >= 18 ? `Hey ${girlName}, you are eligible for marriage.` : `Hey ${girlName}, you are not eligible for marriage.`
    return result;
}
var returnValue = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(returnValue);
var returnValue = femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(returnValue);
console.log(``);
