

const arrayNums = [20, 3, 4, 56, 90, 400, 49];

console.log(`1. Perform shallow clone on arrayNums. Update cloned array with values -> 55, 66 using push() and log original and cloned array on console`);
const clonedArray = arrayNums;
clonedArray.push(55,66);
console.log("Original Array : ", arrayNums);
console.log("Cloned Array : ", clonedArray);
console.log(``);

console.log(`2. Perform deep clone using spread operator. Update original array with value 10, 25 at last position and log both arrays on console`);
const deepClonedArray = [...arrayNums];
arrayNums.push(10, 25);
console.log("Original Array : ", arrayNums);
console.log("Deep Cloned Array : ", deepClonedArray);
console.log(``);

console.log(`3. Given array -> arrayEven = [2, 30, 14, 8]. Merge or concat this array with 'arrayNums' using spread operator, log result on console`);
const arrayEven = [2, 30, 14, 8];
const mergedArray = [...arrayNums, ...arrayEven];
console.log("Merged Array : ", mergedArray);
console.log(``);

console.log(`4. Create the employee_info object as shown and log employee details like address and mobile number`);
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,000INR",
        aug_month: "50,000INR",
        jun_month: "65,000INR"
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", " 1800- 4567 32", " +91- 9096 5678 77"]
}
console.log(`Employee Address : ${employee_info.address.locality.colony}, ${employee_info.address.locality.street}, City :  ${employee_info.address.city}, State :  ${employee_info.address.state}, Country :  ${employee_info.address.country}`);
console.log(`Mobile Numbers : ${employee_info.mobiles}`);
console.log(``);

console.log(`5. Perform deep clone using JSON.stringfy(), update properties and log both objects on console`);
const deepClonedObject = JSON.parse(JSON.stringify(employee_info));
deepClonedObject.salary.july_month = "80,000INR";
employee_info.address.country = "United Kingdom";

console.log("July Month Salary in Original Object :",employee_info.salary.july_month);
console.log("July Month Salary in Cloned Object :",deepClonedObject.salary.july_month);
console.log("Country in Original Object : ", employee_info.address.country);
console.log("Country in Cloned Object : ", deepClonedObject.address.country);
console.log(``);

