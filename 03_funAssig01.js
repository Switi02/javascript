function welcome(){
    console.log("Welcome to My JavaScript Function Asssignment");
}
welcome();

console.log("***********************************************");

function learn(){
    console.log("Assignment contains 3 functions with arguments");
}
learn();

console.log("***********************************************");

function personalDetails(firstName, lastName, collegeName){
    console.log("My Personal Details :");
    console.log("My name is    : ", firstName, lastName);
    console.log("My college is :", collegeName);
}
personalDetails("Sweety", "Lulla", "Pratap College, Amalner");

console.log("***********************************************");

function swapValuesDude(argOne, argTwo){
    console.log("Before Swap,", "Value1 :", argOne, "Value2 :", argTwo);
    var temp = argOne;
    argOne = argTwo;
    argTwo = temp;
    console.log("After Swap, ", "Value1 :", argOne, "Value2 :", argTwo);
}
swapValuesDude("Virat", "Anushka");
swapValuesDude(1000, 2000);

console.log("***********************************************");

function addThreeValues(argOne, argTwo, argThree){
    console.log("Add three values :", argOne,",", argTwo,",", argThree);
    var result = argOne + argTwo + argThree;
    console.log("Addition         :", result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", " Good", " Morning");

console.log("***********************************************");