var greet = "Good Morning";
console.log("Given string is ", greet);

console.log("Total character in the string is :", greet.length);

console.log("Character at index 3: ", greet.charAt(3));

var lengthTotal = greet.length;

console.log("Char at last index :", greet.charAt(lengthTotal - 1));

var indexOf = greet.indexOf("M");
console.log("Index of character M : ", indexOf);

var indexOfNin = greet.indexOf("nin");
console.log("Index of substring nin : ", indexOfNin);

var greetAfterReplace = greet.replace("Morning", "Afternoon");
console.log("Replace substring Morning with Afternoon:  ", greetAfterReplace);

console.log(greet.replace("Mor", "Eve"));

console.log("To upper case : ", greet.toUpperCase());

var greet = "   Good Morning    ";
console.log("Length ", greet.length);
var resultTrim = greet.trim();
console.log(greet.trim(), resultTrim, "Length: ", resultTrim.length);
console.log("Include() ", greet.includes("Good"));

var greet = "Good Morning";
var resultSlice = greet.slice(0, 4);
console.log("Slice method", resultSlice);

console.log("slice with negative start index: ", greet.slice(-7));
console.log("slice with negative start and end index: ", greet.slice(-7, -2));

var studList = "Dips,Jenny,Ganni,Manni,Shani";
var stdListSplit = studList.split(",");
console.log("Student list after split by char ,", stdListSplit);
console.log("Total number of student:", stdListSplit.length);

var sentence =
  "Yes you can do it guys, just keep learning and practising as well";
var wordsInSetence = sentence.split(" ");
console.log("Total words in sentence string is: ", wordsInSetence.length);

console.log("============= concat()=============");
var firstName = "Mohit ";
var lastName = "Sharma";
//Concatnation using + operator
var result = firstName + lastName;
console.log("Concatenation using + operator:", result);
var result = firstName.concat("Ravesh ", lastName);
console.log("Concatenation using concat():", result);

console.log(`Yes you can do it " Sanket "  `);

var firstName = "Mohit ";
var lastName = "Sharma";
console.log("First name is: " + firstName + "Last name is: " + lastName);

console.log(`First name is: ${firstName} and last name is ${lastName} `);

//Next line in second word
console.log("Hello", "\nGood", "\nMorning");
