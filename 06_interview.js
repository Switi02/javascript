



console.log("Function Expression with no return value to check TCS interview eligibility");
console.log(``);
var tcsEligibility = function (gradScore, hscScore, sscScore, candidateName){
    console.log(`Candidate Name   : ${candidateName}`);
    console.log(`Graduation Score : ${gradScore}`);
    console.log(`HSC Score        : ${hscScore}`);
    console.log(`SSC Score        : ${sscScore}`);
    if (sscScore > 90 || hscScore >= 80 || gradScore >= 70) {
        console.log(`Congrats ${candidateName}, you are eligible for TCS interview`);
    } else {
        console.log(`Unfortunately ${candidateName}, you are not eligible for interview`);                
            }
            console.log(``);
    }
        


tcsEligibility(80, 86, 90, "Sweety");
tcsEligibility(70, 65, 55, "Disha");
tcsEligibility(60, 79, 88, "Vaibhav");

