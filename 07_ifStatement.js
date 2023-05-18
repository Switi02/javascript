


console.log(`---------------If Statement------------------`);

console.log("I am going to office");
var isTrafficToDailyRoute = false;
if(isTrafficToDailyRoute){
    console.log("Daily route");
}
console.log("Office");

console.log(`---------------If  Else Statement------------------`);
var num1 = 13;
var isEven = num1%2==0;
if (isEven) {  
    console.log(` Even number: ${num1}`);
} else {
    console.log(` Odd number: ${num1}`);
}
console.log("After if else statement");

console.log(`---------------Nested If  Else Statement------------------`);
// function marriageEligibility(age, gender, candidateName){
//     console.log(`Candidate Name : ${candidateName}  |  Gender : ${gender}  |  Age : ${age}`);
//     if (gender == "male" && age >=21 && age<=90) {
//         console.log(`${candidateName}, you are eligible`);
//     } else {
//         if (gender == "female" && age >=18) {
//             console.log(`${candidateName}, you are eligible`);            
//         } else {
//             if (gender == "transgender") {
//                 console.log(`${candidateName}, you are not allowed as per Indian Constitution `);
//             } else {
//                 if (gender =="female" && age<18) {
//                     console.log(`${candidateName}, you are below 18. Not allowed`);                    
//                 } else {
//                     console.log(`${candidateName}, you are below 21, Not allowed`);
//                 }
//             }            
//         }
//     }

// }
// marriageEligibility(23,"male", "Shyam");
// marriageEligibility(21, "female", "Jenny");
// marriageEligibility(33, "transgender", "Matoki");
// marriageEligibility(16, "female", "Ketty");
// marriageEligibility(20, "male", "Sandy");
// marriageEligibility(305, "male", "Mandy");




function marriageEligibility(age, gender, candidateName){
    console.log(`Candidate Name : ${candidateName}  |  Gender : ${gender}  |  Age : ${age}`);
    if ((gender == "male" && age >=21 && age<=90) || (gender =="female" && age >=18 && age <=90)) {
        console.log(`${candidateName}, you are eligible for voting`);
    } else {
        if ((gender == "male" && age <21 && age >0) || (gender == "female" && age <18 && age >0)) {
            console.log(`${candidateName}, you are not eligible for voting`);           
        } else {
            if (gender == "transgender") {
                console.log(`${candidateName}, you are not allowed as per Indian Constitution`); 
            } else {
                console.log(`Invalid Data`);
            }            
        }
        
    }
    console.log(``);
}




// console.log(`--------------------Sir's Code-----------------------------`);
// console.log("I am going to office");

// var isTrafficToDailyRoute = false;
// if(isTrafficToDailyRoute) {
//     console.log("Daily route");
// }
    // console.log("Going by Cab");
    // console.log("Had breakfast in middle");

// var num1 = 13; 
// var isEven = num1%2==0;// false
// if (isEven) {  
//     console.log(` Even number: ${num1}`);
// } else {
//     console.log(` Odd number: ${num1}`);
// }
// console.log("After if else statement");

// gender - male --> age >=21   AND <=90
// gender - female --> age >=18   AND <=90

// gender - transgender --> invalid

// function marriageEligibility(age, gender, name){
//     if (age==null || age==undefined || gender==null || gender== undefined ) {
//        console.log(`Invalid Input  ${name}  Age: ${age}  Gender: ${gender}` ); 
//     } else {
//        if ((gender == "male" && age <21 || age >90) ) {
//           console.log(`Invalid Input ${name} Age: ${age}  Gender:${gender}` ); 
//        } else {
//             if (gender=="female" && age <18 || age > 90) {
//                 console.log(`Invalid Input  ${name} ${age} ${gender}` ); 
//             } else {
//                  if (gender=="transgender") {
//                     console.log(`Not allowed ${name} ${age} ${gender} as constitution` ); 
//                  } else { 
//                     if (gender=="male") {
//                         console.log(`You are eligible ${name} ${age} ${gender} `);
//                     } else {
//                         console.log(`You are eligible ${name} ${age} ${gender} `);
//                     }
//                  }
//             }
//        }  
//     }
// }
marriageEligibility(null, "male", "Shyam");
marriageEligibility(undefined, "male", "Shyam");
marriageEligibility(31, null, "Shyam");
marriageEligibility(24, undefined, "Shyam");

marriageEligibility(20, "male", "Ritik");
marriageEligibility(190, "male", "Satik");

marriageEligibility(16, "female", "Ketty");
marriageEligibility(98, "female", "Jenny");


marriageEligibility(23, "female", "Menny");
marriageEligibility(27, "male", "Bill");





marriageEligibility(23, "male", "Shyam");
marriageEligibility(21, "female", "Jenny");
marriageEligibility(33, "transgender", "Matoki");

marriageEligibility(16, "female", "Ketty"); 
marriageEligibility(20, "male", "Sandy"); 

marriageEligibility(350, "male", "Mandy"); 

marriageEligibility(-30, "male", "Mandy"); 

marriageEligibility(null, "male", "Mandy"); 

marriageEligibility(-30, NaN, "Mandy");

marriageEligibility(42, null, "Mandy");