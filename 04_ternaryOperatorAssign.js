console.log(` 1)  `);

var myFunction = function (){
var num1 = 10;
var num2 = -10;
var result = num1 > num2 ? `   The greatest number among "10" and "-10" is 10` : 
`   The greatest number among "10" and "-10" is -10`;
console.log(result);
var value1 = 800;
var value2 = 899;
var result1 = value1 > value2 ? `    The greatest number among "800" and "899" is 800` : 
`   The greatest number among "800" and "899" is 899`;
console.log(result1);
}
myFunction();
console.log(`............................................................................`);

console.log(` 2)  `);

var isEvenOrOdd = function (value,value2,value3,value4){
   var result = value%2==0 ? "Even" : "Odd";
    console.log(`   Given number 29 is  ${result}`);
    var result1 = value2%2==0 ? "Even" : "Odd";
    console.log(`   Given number 44 is  ${result1}`);
    var result2 = value3%2==0 ? "Even" : "Odd";
    console.log(`   Given number 0 is  ${result2}`);
    var result3 = value4%2==0 ? "Even" : "Odd";
    console.log(`   Given number 101 is  ${result3}`); 
}
isEvenOrOdd("29"  ,"\n44","\n0","\n101" );
console.log(`............................................................................`);

var words = function(name){
var length = name.length;
var string = length%2==0 ? "Even"  : "Odd" ;
console.log(`   Given word is ${name} ${string}`);
 }

words("JavaScript" );
words("Developer");
words("Google");