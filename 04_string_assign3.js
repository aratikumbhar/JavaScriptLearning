 function squareOfWordLength(){

 }
 squareOfWordLength();

console.log(` 1) `);
var word = "JavaScript";
console.log(`    The length of word "JavaScript" is ${word.length}  and its square is ${word.length * word.length}`);

var word1 = "Google Chrome";
console.log(`    The length of word "Google Chrome" is ${word1.length}  and its square is ${word1.length * word1.length}`);

var word2 = "Developer Smart";
console.log(`    The length of word "Developer Smart" is ${word2.length}  and its square is ${word2.length * word2.length}`);

console.log(`......................................................................................................`);
console.log(` 2) `);
var sentence = "I am Angular Developer";
var wordsInSetence = sentence.split(` `)
console.log(`    2.1) Length of string is : ${sentence.length}   Total  words in string are : ${wordsInSetence.length}`);
console.log(`         After dividing length by total words the answer is :  ${sentence.length / wordsInSetence.length} `);

console.log(`    2.2) Multiplaying string by length with total words are :  ${sentence.length * wordsInSetence.length}`);