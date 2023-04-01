console.log("");
function stringHandsOn() {}
stringHandsOn();

var sentence = "     Hey you are doing good keep it up     ";
console.log(`1)   Given a string : ${sentence}`);
console.log("");

console.log(`2)   Length of string is :  ${sentence.length}`);
console.log("");

console.log(`3)   Removed extra spaces :  ${sentence.trim()}`);
console.log("");

var sentenceLen = sentence.trim();
//   console.log(`removed space length: ${sentenceLen.length}`);
var count = sentence.length - sentenceLen.length;
console.log(`4)   Count of extra spaces that removed is : ${ count}`);
//  console.log(`${sentenceLen.length}`);
console.log("");

console.log(`5)   The first character of string is: ${sentenceLen.charAt(0)} and the last character of string is: ${sentenceLen.charAt(32)}`);
console.log( "");

var wordsInSetence = sentenceLen.split(" ");
console.log(`6)   Total words in string are : ${ wordsInSetence.length}`);
console.log("");

var indexOf = sentenceLen.indexOf("good");
console.log(`7)   Index of word "good" is :  ${indexOf}`);
console.log("");

console.log(`8)   Substring starting from index 22 is : ${sentenceLen.substring(22)}`);
console.log(`     Substring starting from index 22 is : ${sentenceLen.slice(22, 32)}`);
console.log("");

console.log(`9)   Is string ending with "up" : ${sentenceLen.endsWith("up")}`);
console.log("");

console.log(`10)  Is string starting with "Hey" : ${sentenceLen.startsWith("Hey")}`);
