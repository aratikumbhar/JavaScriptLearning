// Count the total number of vowels in given string
console.log(`1)`);
var sentence = "I am very good IT Developer";
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    var charCopy = char.toLowerCase();
    if (charCopy=='a' || charCopy=='e' || charCopy=='i' || charCopy=='o' || charCopy=='u') {
        counter = counter +1;
    }   
}
console.log(`   Total count of vowels in the string is: ${counter}`);
console.log(`-----------------------------------------------------------------------------------`);

// sum of cube of numbers from 1 to 5
console.log(`2)`);
function sumOfCubes() {
    var sum = 0;
    for (let index = 1; index <=5; index++) {
        var cube = (index*index*index);
        sum = sum + cube;
    }
    console.log(`   The sum of cube of numbers from 1 to 5 is: ${sum}`);
}
sumOfCubes();
console.log(`-----------------------------------------------------------------------------------`);

console.log(`3)`);
function oddPositionedChars(string){
   console.log(`   String is: ${string}`);
    var emptyString = " ";
    var myString = string.split(" ").join("");
    for (let index = 0; index < myString.length; index++) {
        if (index % 2 != 0) {
            emptyString = emptyString + myString[index];
        }
    }
    console.log(`   Odd Positioned char without space is: ${emptyString}`);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT champ");
console.log(`-----------------------------------------------------------------------------------`);

console.log(`Pair programming:`);
function factorialNumber(n){
    if (n == 0 || n == 1) {
        return 1;
    }else{
        return n * factorialNumber(n - 1)
    }
}
var numResult = factorialNumber(5);
console.log(`   Factorial of 5 is: `, numResult);

var numResult = factorialNumber(7);
console.log(`   Factorial of 7 is: `, numResult);

var numResult = factorialNumber(8);
console.log(`   Factorial of 8 is: `, numResult);

var numResult = factorialNumber(12);
console.log(`   Factorial of 12 is: `, numResult);