


console.log("Function Expression with no return value to check TCS interview eligibility");
console.log(``);
var tcsEligibility = function (gradScore, hscScore, sscScore, candidateName){
    console.log(`Candidate Name   : ${candidateName}`);
    console.log(`Graduation Score : ${gradScore}`);
    console.log(`HSC Score        : ${hscScore}`);
    console.log(`SSC Score        : ${sscScore}`);
    var result = gradScore >= 70 || hscScore >= 80 || sscScore > 90 ?
    `Congrates ${candidateName}, you are eligible for TCS interview` :
    `Unfortunately ${candidateName}, you are not eligible for interview`
    console.log(result);
    console.log(``);
}
tcsEligibility(80, 86, 90, "Sweety");
tcsEligibility(70, 65, 55, "Disha");
tcsEligibility(60, 79, 88, "Vaibhav");

