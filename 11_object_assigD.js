

console.log(`-----------------Created an object with name professor-------------------`);
let professor = {
    name:"Prof. Lohar",
    subject:"C# Programming",
    university: "NMU, Jalgaon",
    degrees: {
        graduation:"BCA",
        Diploma: "Animation",
        postGraduation: "MCA",
        PHD: "Adv Computing"
    },
    certificates: ['Hacker Rank Participation', 'Certificate in IFE course', 'Certificate in Adv Programming'],
    conCatDegrees: function(){
        let degrees = `Graduation : ${this.degrees.graduation}, Diploma : ${this.degrees.Diploma}, Post Graduation : ${this.degrees.postGraduation}, PHD : ${this.degrees.PHD}`
        return degrees;
    }
}
console.log(`Teacher degrees are - ${professor.conCatDegrees()}`);

console.log(`--------------------Add new property totalExperience----------------------`);
professor.totalExperience =  "14 years";
console.log(`Total Experience of professor = ${professor.totalExperience}`);

console.log(`-----------------------Modify subject property----------------------------`);
professor.subject = "Adv Programming";
console.table(professor);

console.log(`----------Add one new certificate -> Oracle Certified at the end of array---------`);
professor.certificates.push("Oracle Certified");
console.log(`Last Element of Array : ${professor.certificates[professor.certificates.length-1]}`);