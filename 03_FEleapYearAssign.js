


console.log(`Function Expression to check given year is Leap Year or not`);
console.log(``);
var checkLeapYear = function(leapYear){
    console.log(`Year : ${leapYear}`);
    if (leapYear == null || leapYear == undefined || typeof leapYear != "number") {
        console.log(`Invalid Input`);
    } else {
        if (leapYear % 4 != 0) {
            console.log(`Not a Leap Year`);
        } else {
        console.log(`Leap Year`);
        }        
    }
    console.log(``);
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);
