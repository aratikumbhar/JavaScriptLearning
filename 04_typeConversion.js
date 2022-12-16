console.log(` + operator can do the the type conversion as well from string to number `);
var numStr = "100";
var num = + numStr;   // Explicit Conversion
console.log(`typeof numStr is: ${typeof numStr}`);
console.log(`typeof num is: ${typeof num}`);

var numStr = "Chandra";
var num = + numStr;
console.log(`typeof ${numStr} is: ${typeof numStr}`);
console.log(`typeof ${num} is: ${typeof num}`);

console.log(`==== Comparison is ${20 == "20"}`);   //Implicit Conversion
