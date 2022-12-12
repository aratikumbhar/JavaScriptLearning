console.log("1)");
var square = function (num) {
  console.log("Square of 5:", num * num);
};
square(5);
var square = function (num) {
  console.log("Square of 6:", num * num);
};
square(6);
var square = function (num) {
  console.log("Square of 25:", num * num);
};
square(25);
var square = function (num) {
  console.log("Square of 100:", num * num);
};
square(100);

console.log(
  "=============================================================================================="
);
console.log("2)");
console.log("Variable type : ", typeof square);

console.log(
  "=============================================================================================="
);
console.log("3)");
var area = function (length, width) {
  console.log("Area of rectangle = ", length * width);
};
area(499, 917);

console.log(
  "=============================================================================================="
);
console.log("4)");
var swapValues = function (name1, name2) {
  console.log("Before Swap : ", name1, name2);
  var temp = name1;
  name1 = name2;
  name2 = temp;
  console.log("After Swap : ", name1, name2);
};
swapValues("Virat", "Anushka");

var swapValues = function (value1, value2) {
  console.log("Before Swap : ", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After Swap : ", value1, value2);
};
swapValues(1000, 2000);

console.log(
  "=============================================================================================="
);
console.log("5)");
var about = "JS the most popular language";
console.log("String is : ", about);
console.log("A. ", "Total character in the string is : ", about.length);
console.log("B. ", "Character at the index 6 : ", about.charAt(6),"(spacee of 6th position)");
console.log("C. ", "Character at the index 11 : ", about.charAt(11),"(spacee of 11th position)");
var lengthTotal = about.length;
console.log(
  "D. ",
  "Last character in the string :  ",
  about.charAt(lengthTotal - 1)
);
console.log("E. ", "First character in the string 0 : ", about.charAt(0));
var num = 28;
console.log("F. ", "Total length of string square : ", num * num);
