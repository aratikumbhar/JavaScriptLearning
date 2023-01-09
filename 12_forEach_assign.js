const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`Given array is: `);
console.log(array_numbers);
console.log(`-----------------------------------------------------------------------------------`);

console.log(`1) Log the array element with it's index using forEach() with arrow function`);
array_numbers.forEach((currentValue, index) =>{
    console.log("Value is ", currentValue, "  it's index is ", index);
});
console.log(`-----------------------------------------------------------------------------------`);

console.log(`2) Positive numbers in given array is`);
const postiveArray = [];
array_numbers.forEach((currentValue) => {
    if(currentValue > 0){
        postiveArray.push(currentValue);
      //  console.log(currentValue);
    }
});
console.log(postiveArray);
console.log(`-----------------------------------------------------------------------------------`);

console.log(`3) Negative numbers in given array is`);
const negativeArray = [];
array_numbers.forEach((currentValue) => {
    if(currentValue < 0){
        negativeArray.push(currentValue);
      //  console.log(currentValue);
    }
});
console.log(negativeArray);
console.log(`-----------------------------------------------------------------------------------`);

console.log(`4) Even numbers in the given array`);
const arrayOfEven = [];
array_numbers.forEach( (currentValue) => {
    if (currentValue %2 == 0) {
        arrayOfEven.push(currentValue);
      //  console.log(currentValue);        
    }
});
console.log(arrayOfEven);
console.log(`-----------------------------------------------------------------------------------`);

console.log(`5) Find the sum of all the values in the given array is`);
let sum = array_numbers.reduce(function (a, b){
    return a + b;
}, 0);
console.log(`Sum of all the values in the given array is: ${sum}`);
console.log(`-----------------------------------------------------------------------------------`);

console.log(`6) Find the even positioned values `);
// let lengthOfArray = array_numbers.length;
// console.log(lengthOfArray);
const newArray = [];
array_numbers.forEach( (currentValue, index)=> {
    if(index %2==0){
        newArray.push(currentValue);
    }
});
console.log(`Even positioned in the array is `);
console.log(newArray);