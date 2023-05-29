


const sbiBank = {
    bankName: "SBI Bank",
    location: "Jalgaon",
    accountNo: 202226541523,
    ifsc: "SBIN0003295",
    interestRate: "2.70%p.a.",
    showDetails: function(){
        console.log(`Bank Name : ${this.bankName} || Loacation : ${this.location} || Account No : ${this.accountNo} || IFSC : ${this.ifsc} || Interest Rate : ${this.interestRate}`);
    }
}

const axisBank = {
    bankName: "Axis Bank",
    location: "Jalgaon",
    accountNo: 202589741643,
    ifsc: "UTIB0000174",
    interestRate: "3.50%p.a.",
    showDetails: function(){
        console.log(`Bank Name : ${this.bankName} || Loacation : ${this.location} || Account No : ${this.accountNo} || IFSC : ${this.ifsc} || Interest Rate : ${this.interestRate}`);
    }
}

const hdfcBank = {
    bankName: "HDFC Bank",
    location: "Jalgaon",
    accountNo: 289247966523,
    ifsc: "HDFC0000180",
    interestRate: "3.00%p.a.",
    showDetails: function(){
        console.log(`Bank Name : ${this.bankName} || Loacation : ${this.location} || Account No : ${this.accountNo} || IFSC : ${this.ifsc} || Interest Rate : ${this.interestRate}`);
    }
}

const yesBank = {
    bankName: "YES Bank",
    location: "Jalgaon",
    accountNo: 288945697662,
    ifsc: "YESB0000347",
    interestRate: "4.00%p.a.",
    showDetails: function(){
        console.log(`Bank Name : ${this.bankName} || Loacation : ${this.location} || Account No : ${this.accountNo} || IFSC : ${this.ifsc} || Interest Rate : ${this.interestRate}`);
    }
}

sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();
