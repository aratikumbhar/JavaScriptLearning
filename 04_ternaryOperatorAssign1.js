console.log(` 1)  `);

function maleMarriageElibigility(gender,age,boyName){
var result = (gender=="Male" && age >= 21) ? `   Hey Bill Gates you are eligible for marriage` : `   Hey Bill Gates you are not eligible for marriage`;
console.log(result);
}
maleMarriageElibigility("Male",25,"Bill Gates");

function maleMarriageElibigility1(gender,age,boyName){
 var gender = (gender=="Male" && age >=21 ) ? `   Hey Stew Jobs you are eligible for marriage` : `   Hey Stew Jobs you are not eligible for marriage`;
console.log(gender);
}
maleMarriageElibigility1("Male",17,"Stew Jobs");
console.log(`......................................................................................................`);

console.log(` 2)  `);
function femaleMarriageElibigility(gender,age,girlName){
var femaleRes = (gender=="Female" && age >=18) ? `   Hey Jenifer you are eligible for marriage` : `   Hey Jenifer you not eligible for marriage`;
console.log(femaleRes);
}
femaleMarriageElibigility("Female",16,"Jenifer");

function femaleMarriageElibigility1(gender,age,girlName){
var femaleRes=(gender=="Female" && age >=18) ? `   Hey Malinda Gates you are eligible for marrige` : `   Hey Malinda Gates you are not eligible for marriage`;
console.log(femaleRes);
}
femaleMarriageElibigility1("Female",27,"Malinda Gates");