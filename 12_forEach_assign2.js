class Employee {
    constructor(empId, empName, empDept, empSalary, empCompany) {
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}
const empAnil = new Employee(22, "Anil", "IT", 50000, "TCS");
const empRadha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const empRishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const empSonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const empMonika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const empViny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const empMahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

console.log(`1) Find out 'TCS' employee and log only name and company`);
const employees = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi]
employees.forEach((employee) => {
    if (employee.empCompany=="TCS") {
        console.log(`Employee name is: ${employee.empName},`,`Company is: ${employee.empCompany}`);
    }
});
console.log(``);

console.log(`2) Find out employee who have salary greater than or equal to 50000`);
employees.forEach( (employee) => {
    if (employee.empSalary >= 50000) {
        console.log(employee);
    }
});
console.log(``);

console.log(`3) Find the sum of all employee salary`);
sum = 0;
employees.forEach( (employee) => {
    sum = sum + employee.empSalary;
    
} );
console.log(`Sum of all employee salary is: ${sum}`);
console.log(``);

console.log(`4) Find the average salary of all employees`);
employees.forEach( (employee) => {
    Average = sum / employees.length; 
});
console.log(`The average salary of all employees is: ${Average}`);
console.log(``);

console.log(`6) Find the IT or HR dept employee whose salary is greater than or equal to 75000`);
employees.forEach( (employee) => {
    if ((employee.empDept == "IT" || employee.empDept == "HR") && employee.empSalary >= 75000) {
        console.log(employee);
    }
});