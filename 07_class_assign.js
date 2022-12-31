console.log(`1)  Class for Vehicle: `);
class Vehicle {
    constructor(carName, engine, fuel, avarage, price) {
        this.carName = carName,
        this.engine = engine,
        this.fuel = fuel,
        this.avarage = avarage,
        this.price = price
    }
}
let HundaiI20 = new Vehicle("HundaiI20", 1200, "Petrol", 20, 100000);
let Toyoto = new Vehicle("Glanza", 1000, "Ptrol", 22, 190000);
let Mahindra300 = new Vehicle("Tuv", 1200, "Petrol", 20, 130000);
let MarutiBaleno = new Vehicle("Baleno", 1100, "Petrol", 20, 110000);
console.log(HundaiI20);
console.log(Toyoto);
console.log(Mahindra300);
console.log(MarutiBaleno);

console.log(`2) Class for College: `);
class College {
    constructor(clgName, department, location, principal ){
        this.clgName = clgName,
        this.department = department,
        this.location = location,
        this.principal = principal
    }
    details(){
        console.log(this.clg_name, this.department, this.location, this.principal);
    }
}
let Fabtech = new College("Fabtech", "Sangola", 7, "Dr.R.B.Shendage");
let Sinhgad = new College("Sinhgad", "Korti", 5, "Dr.K.J.Karande");
let Newsatara = new College("Newsatara", "Korti", 6, "Dr.A.A.Sagade");
let Sevari = new College("Sevari", "Pandharpur", 6, "Dr.B.P.Ronge");
console.log(Fabtech);
console.log(Sinhgad);
console.log(Newsatara);
console.log(Sevari);

console.log(`3) Traverse Object by using for in loop`);
function traverseObject(Fabtech){
    for (const key in Fabtech) {
        if (Object.hasOwnProperty.call(Fabtech, key)) {
            const element = Fabtech[key];
            console.log(`${key} : ${element}`);
        }
    }
}
traverseObject(Fabtech);
console.log(``);
traverseObject(Sinhgad);
console.log(``);
traverseObject(Newsatara);
console.log(``);
traverseObject(Sevari);