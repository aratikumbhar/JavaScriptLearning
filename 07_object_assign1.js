const professor = {

}
professor.name = "Dhanaji Bhanvse",
professor.age = 45,
professor.gender = "Male",
professor.city = "Sangola";
console.log(`1) All the properties: `);
console.log(professor);
console.log(``);

console.log(`2) Include nested object "Degrees":`);
professor.degrees = {
    Enginerring : "Computer Engineering",
    PHD : "Adv Computing",
    College : "VMS Sangola"
}
console.log(professor.degrees);
console.log(``);

console.log(`3) Include nested object "Certificates": `);
professor.certificates = {
    1 : "Hacker Rank",
    2 : "Certificate In IFE",
    3 : "Adv Programming"
}
console.log(professor.certificates);
console.log(``);

console.log(`4) Add function which concate all the Degrees:`);
console.log(professor.degrees);
console.log(`The total degrees of professor are Engineering,PHD,College`);
console.log(``);

console.log(`5) Try to add new property: ${professor.gender}`);
professor.height = 6;
console.log(professor);
console.log(``);

console.log("6) Modify existing property:");
professor.age = 50;
console.log(professor);
console.log(``);

console.log(`7) Delete any one certificate:`);
delete professor.certificates[1];
console.log(professor.certificates);
console.log(``);

console.log(`8) Add new certificate in nested object "Certificates": `);
professor.certificates = {
    1 : "Data Science",
    2 : "Certificate In IFE",
    3 : "Adv Programming"
}
console.log(professor.certificates);
console.log(``);

console.log(`9) Log the nested object certificate on console:`);
console.log(professor.certificates[1]);
console.log(professor.certificates);