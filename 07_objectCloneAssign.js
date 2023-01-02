const arrayNums = [20,3, 4, 56, 90, 400, 49 ];
console.log(`Given Array is: `);
console.log(arrayNums);
arrayNums.push(55, 66)
console.log(`1) After shallow clone, cloned array is:`);
console.log(arrayNums);
console.log(``);

let arrayClone = [... arrayNums];
console.log(`2) After deep clone, original array is:`);
console.log(arrayClone);

arrayNums.push(10, 25 );
console.log(`After deep clone, cloned array is:`);
console.log(arrayNums);
console.log(``);

const arrayEven = [2, 30, 14, 8];
console.log(`Given other array is:`);
console.log(arrayEven);

let mergedArray = [...arrayEven, ...arrayNums];
console.log(`Array after merged with arrayNums:`);
console.log(mergedArray);
console.log(``);

const employee_info = {
    emp_id : 27,
    emp_name : "John Doe",
    salary : {
        july_month : "40,0000INR",
        aug_month : "50,0000INR",
        jun_month : "65,0000INR"
    },
    address : {
        locality : {
            colony : "OM Vrindavan Society",
            street : "Kanch Pokli, 431202"
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India"
    },
    mobiles : ["+91 8600 3456 88", " 1800- 4567 32", " +91- 9096 5678 77"]
}

console.log(`5a) `);
console.log(`${employee_info.emp_name}'s address is: 
${employee_info.address.locality.colony}, ${employee_info.address.locality.street},
${employee_info.address.city}, ${employee_info.address.state}, ${employee_info.address.country},`);

console.log(`5b) `);
console.log(`${employee_info.emp_name}'s mobile numbers are: ${employee_info.mobiles}`);
console.log(``);

let salary = JSON.parse(JSON.stringify(employee_info.salary.july_month));
console.log(`6a) `);
console.log(`${employee_info.emp_name}'s 'July_month' salary is: ${employee_info.salary.july_month}`);
employee_info.salary.july_month = "80k";
console.log(`${employee_info.emp_name}'s 'July_month' updated salary is: ${employee_info.salary.july_month}`);

console.log(`6b)`);
console.log(`${employee_info.emp_name}'s country is: '${employee_info.address.country}'`);
employee_info.address.country = "United Kingdom";
console.log(`${employee_info.emp_name}'s updated country is: '${employee_info.address.country}'`);