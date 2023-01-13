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
console.log(`1) Find all the employees from 'Wipro' company`);
const arrayOfFilterEmployee = arrayOfEmployee.filter( (employee) => {
      return employee.empCompany == "Wipro";
});
arrayOfFilterEmployee.forEach( (element) => {
    console.log(element);
});
console.log(``);

console.log(`2) Find all the employees from 'IT' or 'HR' department`);
const arrayOfDept = arrayOfEmployee.filter( (employee) => {
    return employee.empDept== "IT" || employee.empDept == "HR";
});
arrayOfDept.forEach( (element) => {
    console.log(element);
});
console.log(``);

console.log(`3) Find all the employees whose empId is greater than 50`);
const arrayOfEmployeeId = arrayOfEmployee.filter( (employee) => {
    return employee.empId > 50;
});
arrayOfEmployeeId.forEach( (element) => {
    console.log(element);
});
console.log(``);

console.log(`4) All employees whose name starts with A/V/M`);
const arrayOfEmployeeName = arrayOfEmployee.filter( (employee) => {
    if(employee.empName.startsWith("A") || employee.empName.startsWith("V") || employee.empName.startsWith("M")){
        console.log(employee);
    }
});
console.log(``);

console.log(`5) Find average salary for all  the department`);
sum = 0;
const arrayOfAverage = arrayOfEmployee.filter( employee => sum = sum + employee.empSalary);
const finalAvgSalary = arrayOfAverage.reduce( (_runningTotal, _currentEmp) => {
    return sum / arrayOfEmployee.length;
});
console.log(`Average salary is: ${finalAvgSalary}`);
console.log(``);

console.log(`6) Find the average salary of 'IT' department`);
const averageSalary = arrayOfEmployee.filter( (employee) => {
    return employee.empDept == "IT";
});
const averageSalaryOfIt = averageSalary.reduce( (runningTotal, value) => {
    return runningTotal + value.empSalary;
}, 0);
console.log(`Average salary of 'IT' department is: ${averageSalaryOfIt / averageSalary.length}`);


// sum = 0;
// const averageSalaryOfIt = arrayOfEmployee.filter( currentEmp => currentEmp.empDept == "IT");
// const finalAvgSalary = averageSalaryOfIt.reduce((_runningTotal,currentEmp)=> (50000+40000+75000) / averageSalaryOfIt.length);
// console.log(`Average salary of 'IT' department is: ${finalAvgSalary}`);