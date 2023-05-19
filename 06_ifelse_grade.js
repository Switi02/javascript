



console.log(`Function with one argument and no return value to check whether he or she is eligible for voting or not.`);
console.log(``);
function voteEligibility(age){
    console.log(`Age of Candidate : ${age}`);
    if (age >=18 && age < 120) {
        console.log(`Candidate is Eligible to vote`);        
    } else {
        if (age < 18 && age > 0) {
            console.log(`Candidate is Not Eligible to vote`);         
        } else {
            console.log(`Invalid Data`);
        }        
    }
    console.log(``);
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);