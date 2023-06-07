

const bankSbi = {
    bankName: "SBI Bank",
    accountNo: 202226541523,
    ifsc: "SBIN0003295",
    accountType: "Saving Account"
}

const bankLocation = {
    street: "Subash Chowk",
    city: "Jalgaon",
    pin: 425001,
}

Object.assign(bankSbi, bankLocation);
console.log(`Cloning properties of bankLocation object in bankSbi object`);
console.table(bankSbi);
console.log(``);

const rateOfInterest = {
    homeLoanInterest: "9.00%p.a.",
    personalLoanInterest: "11.50%p.a.",
    dueInterest: "4.50%p.a."
}

const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.log(`Merged the objects bankSbi, bankLocation, rateOfInterest into new object sbiDetails`);
console.table(sbiDetails);
console.log(``);

console.log(`Traversing sbiDetails object`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key} :  ${element}`);
    }
}
