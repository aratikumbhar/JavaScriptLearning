const professor = {
    name: "Dhanaji Bhanvse",
    age: 53,
    height: 6,
    place: "Sangola",
    degrees: {
      Enginerring : "Computer Science ",
      PHD : "Java ",
      Master : "Programming",
    
      certificates: {
        certificates1: "Hacker Rank Participation",
        certificates2: " IFE Cource",
        certificates3: " Adv Programing",
      },
        // degrees: function () {
        //   return this.Enginerring + this.PHD + this.Master 
        // }
      }
   }
   console.log(`1) All the properties: `);
  console.log(professor);
  console.log(``);

  console.log(`2) Include nested object "Degrees":`);
  console.log(professor.degrees);
  // professor.degrees={
  //   Enginerring : "Computer Science ",
  //   PHD : "Java ",
  //   Master : "Programming",
  // }
  // console.log(this);
  // console.log(professor.degrees);
  console.log(``);

  console.log(`3) Include nested object "Certificates": `);
  console.log(professor.degrees.certificates);
  console.log(``);

  console.log(`4) Add function which concate all the Degrees:`);
  const professorDegrees = professor.degrees;
 // console.log(`${professor.degrees}`);
  console.log(professorDegrees);
  console.log(``);

  professor.gender = "Male";
  console.log(`5) Try to add new property: ${professor.gender}`);
  console.log(professor);
  console.log(``);

  professor.age = 50;
  console.log("6) Modify existing property:");
 // console.log(professor.age);
  console.log(professor);
  console.log(`Age is modified`);
  console.log(``);

  console.log(`7) Delete any one certificate:`);
  delete professor.degrees.certificates.certificates1;
  console.log(professor.degrees.certificates);
  console.log(`Certificates1 is deleted`);
  console.log(``);

console.log(`8) Add new certificate in nested object "Certificates": `);
 professor.degrees.certificates.certificates4 = "MS-CIT";
console.log(professor.degrees.certificates);
console.log(``);

console.log(`9) Log the nested object certificate on console:`);
console.log(professor.degrees.certificates);