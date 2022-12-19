console.log(`1)`);
var votingEligibility = function (age) {
  if (age <= 0 || age > 120) {
    console.log(`   Your age is ${age} : Invalid data`);
  }
  if (age >= 18 && age <= 120) {
    console.log(`   Your age is ${age} : You are eligible for vote`);
  }
  if (age < 18 && age > 0) {
    console.log(`   Your age is ${age} : You are not eligible for vote`);
  }
};
votingEligibility(45);
votingEligibility(17);
votingEligibility(8);
votingEligibility(20);
votingEligibility(-10);
votingEligibility(200);
votingEligibility(0);

console.log(
  `..........................................................................`
);

console.log(`2)`);
function gradeCalculation(marks) {
  if (marks >= 90 && marks <= 100) {
    console.log(`   Fantastic marks: ${marks} Your grade is A+`);
  }
  if (marks >= 75 && marks < 90) {
    console.log(`   Excellent marks: ${marks} Your grade is A`);
  }
  if (marks >= 50 && marks < 75) {
    console.log(`   Good marks: ${marks} Your grade is B`);
  }
  if (marks >= 35 && marks < 50) {
    console.log(`   Marks is ${marks} : Your grade is C neeed improvement`);
  }
  if (marks <= 0 && marks < 100) {
    console.log(`   Marks is ${marks} : Please provide the valid marks`);
  }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
