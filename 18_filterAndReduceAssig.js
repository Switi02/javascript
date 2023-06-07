

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];


console.log(`1. Find all the employees from 'Wipro' company`);
const wiproEmp = arrayEmps.filter((employee) => {
    return employee.emp_company == "Wipro";
})
wiproEmp.forEach((employee) => {
    console.log(`Employee Name : ${employee.emp_name} || Company : ${employee.emp_company}`);
})
console.log(``);

console.log(`2. Find all the employees from 'IT' OR 'HR' dept`);
const deptItOrHr = arrayEmps.filter((employee) => {
    return employee.emp_dept == "IT" || employee.emp_dept == "HR";
})
deptItOrHr.forEach((employee) => {
    console.log(`Employee Name : ${employee.emp_name} || Department : ${employee.emp_dept}`);
})
console.log(``);

console.log(`3. Find all the employees whose emp id's are greater than 50`);
const empIdGreaterThan50 = arrayEmps.filter((employee) => {
    return employee.emp_id > 50;
})
empIdGreaterThan50.forEach((employee) => {
    console.log(`Employee Name : ${employee.emp_name} || Employee ID : ${employee.emp_id}`);
})
console.log(``);

console.log(`4. Find all the employees whose names start with letter 'A' or 'V' or 'M'`);
const empWithAVM = arrayEmps.filter((employee) => {
    return (employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M"));
})
empWithAVM.forEach((employee) => {
    console.log(`Employee Name : ${employee.emp_name}`);
})
console.log(``);

console.log(`5. Find the average salary of the employee for all the department`);
const empSalaries = arrayEmps.map( (employee) => {
    return employee.emp_salary;
});
const sulSalary =empSalaries.reduce( (runningTotal, value) => {
    return runningTotal+value;
});
console.log(`Average Salary = ${sulSalary / arrayEmps.length}`);
console.log(``);

console.log(`6. Find the average salary for 'IT' department`);
const salItDept = arrayEmps.filter((employee) => {
    return employee.emp_dept == "IT";
}).map((employee) => {
    return employee.emp_salary;
});
const avgSal = salItDept.reduce((runningTotal, value) => {
    return runningTotal + value;
});
console.log(`Average Salary for 'IT' Department = ${avgSal / salItDept.length}`);
console.log(``);

