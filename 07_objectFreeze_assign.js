//console.log(`1) Personal details `);
const personal = {
    name : "Arati",
    mobileNo : 7219425154,
    place : "Sangola",
    education : "BCS"
}
// console.log(personal);
// console.log(``);

//console.log(`2) College Details `);
const college = {
    clgName : "Vidnyan Mahavidyalaya Sangola",
    location : "Sangola",
    university : "Solapur",
    departement : 5
}
//console.log(college);
console.log(``);

console.log(`Merge two object personal details and college`);
const mergeObject = Object.assign({}, personal, college);
console.log(mergeObject);
console.log(``);

//console.log(`Creating array of friends name `);
let array = ["Kirti", "Vaishali","Divya","Shital"]
//console.log(array);


console.log(`Array of friends after freezing and iterating by using for of loop`);
for (const iterator of array) {
    console.log(iterator);
}
console.log(``);

console.log(`Revering word 'Technology' as 'ygolonhcet' from "Codemind Technology"`);
let string = "Codemind Technology";
function reverse(array){
    return array.split('').reverse().join('');
}
console.log("Codemind", reverse('Technology'));
