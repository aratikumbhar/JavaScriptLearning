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

let mapOfEmployees = new Map();
mapOfEmployees.set(22, empAnil);
mapOfEmployees.set(33, empRadha);
mapOfEmployees.set(55, empRishi);
mapOfEmployees.set(66, empSonali);
mapOfEmployees.set(77, empMonika);
mapOfEmployees.set(88, empViny);
mapOfEmployees.set(99, empMahi);
console.log(`Traverse the map using forEach loop`);

mapOfEmployees.forEach( (key, value) => {
    console.log(value," ===>" ,key);
});