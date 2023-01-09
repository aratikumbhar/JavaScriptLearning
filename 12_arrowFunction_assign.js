let sentence = ()=>{
    console.log(`1) Simple message with arrow function`);
    console.log(`Good Morning, Today is Monday`);
}
sentence();
console.log(``);

console.log(`2) Multiplication of three numbers and Multiplication of three numbers with one default value`);
let multiply = (n1, n2, n3)=>{
    let mul = n1 * n2 * n3;
    console.log(`a) Multiplication of 5, 5, 2 is: ${mul}`);
}
multiply(5, 5, 2);

let multiply1 = (n1, n2, n3=1)=>{
    let mul = n1 * n2 * n3;
    console.log(`b) Multiplication of 10, 4 with default value 1 is: ${mul}`);
}
multiply1(10, 4);
console.log(``);

console.log(`3) The addition of 5 parameters and return it's value`);
let addition = (n1, n2, n3, n4, n5)=> {
    let add = n1 + n2 + n3 + n4 +n5;
// console.log(add);
 console.log(`The addition is: ${add}`);
}
addition(100, 100, 200, 349, 756);

let message = (value1, value2, value3, value4, value5)=>{
let addRes = value1 + value2 + value3 + value4 + value5;
console.log(`The addition is: ${addRes}`);
}
message("I am ", "learning ", "ES6 ", "features ", "in depth.")