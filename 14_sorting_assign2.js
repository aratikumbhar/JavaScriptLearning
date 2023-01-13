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

const arrayOfEmployee = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];
console.log(`1) Sort in ascending order of the employee ID`);
console.log(``);
arrayOfEmployee.sort( (id1,id2) => {
    return id1.empId > id2.empId ? 1 : -1;
});
arrayOfEmployee.forEach( (currentValue) => {
    console.log(`ID: ${currentValue.empId},  Name: ${currentValue.empName},  Company: ${currentValue.empCompany}`);
});
console.log(`------------------------------------------------------------------------------`);

console.log(`2) Sort in ascending order of the employee department`);
console.log(``);
arrayOfEmployee.sort( (dept1, dept2) => {
    return dept1.empDept > dept2.empDept ? 1 : -1;
});
arrayOfEmployee.forEach( (currentValue) => {
    console.log(`ID: ${currentValue.empId},  Name: ${currentValue.empDept}, Company: ${currentValue.empCompany}`);
});
console.log(`------------------------------------------------------------------------------`);

console.log(`3) Sort in descending order of the employee`);
console.log(``);
arrayOfEmployee.sort( (salary1, salary2) => {
    return salary1.empSalary > salary2.empSalary ? -1 : 1;
});
arrayOfEmployee.forEach( (currentValue) => {
    console.log(`Name: ${currentValue.empName},  Salary: ${currentValue.empSalary}, Company: ${currentValue.empCompany}`);
})