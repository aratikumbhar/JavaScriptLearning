console.log(`1)`);
// Count the total nuumber characters 'a' or 'A'
function countCharA(string) {
    console.log(string);
    var counter = 0;
    for (let index = 0; index < string.length; index++) {
        var char = string.charAt(index);
         var charCopy = char.toLowerCase();
        if (charCopy == 'a' ) {
            counter = counter+1;
        }
    }
    console.log(`   Total number of 'a' or 'A' in the given string is: ${counter}`);

}
countCharA(`   "I AM Learning JavaScript,The Language of internet"`);
console.log(`-------------------------------------------------------------------------------`);
console.log(`2)`);
countCharA(`   "My favourite movie is LAggAn"`);

