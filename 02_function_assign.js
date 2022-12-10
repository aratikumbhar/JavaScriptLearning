function subject() {
  console.log("1)");
  console.log("JavaScript");
  console.log("Anglar");
}
subject();

console.log("---------------------------------------------------------------");
console.log("2)");
function personalDetails() {
  var firstName = "Arati";
  console.log(firstName);
  var lastName = "Kumbhar";
  console.log(lastName);
  var collegeName = "Vidnyan Mahavidyalaya Sangola";
  console.log(collegeName);
}
personalDetails();

console.log("---------------------------------------------------------------");
console.log("3)");
function swapValuesDude(name1, name2) {
  console.log("========Before Swap========");
  console.log(name1, name2);
  var temp = name1;
  name1 = name2;
  name2 = temp;
  console.log("========After Swap========");
  console.log(name1, name2);
}
swapValuesDude("Virat", "Anushka");
function swapValuesDude(value1, value2) {
  console.log("========Before Swap========");
  console.log(value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("========After Swap========");
  console.log(value1, value2);
}
swapValuesDude("1000", "2000");

console.log("---------------------------------------------------------------");
console.log("4)");
function addThreeValues(val1, val2, val3) {
  console.log(val1 + val2 + val3);
}
addThreeValues(10.23, 600, 40);
function addThreeValues(val1, val2, val3) {
    console.log("Addition of arguments=");
  console.log(val1 + val2 + val3);
}
addThreeValues("Hello", "Good", "Morning");
