const array =  [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`Given array :`);
console.log(array);
console.log(`------------------------------------------------------------------------------`);

console.log(`1) Reverse the array`);
array.reverse();
console.log(array);
console.log(`------------------------------------------------------------------------------`);

console.log(`2) Use sort() without any custom logic`);
array.sort();
console.log(array);
console.log(`------------------------------------------------------------------------------`);

console.log(`3) Sort the array in ascending order with custom logic`);
array.sort( (a, b) => {
    return a>b ? 1 : -1;
});
console.log(array);
console.log(`------------------------------------------------------------------------------`);

console.log(`4) Find the greatest number from the array`);
console.log(array);
console.log(`The greatest number from the array is:  ${array[9]}`);
console.log(`------------------------------------------------------------------------------`);

console.log(`5) Find the smallest number from the array`);
console.log(array);
console.log(`The smallest number from the array is:  ${array[0]}`);
console.log(`------------------------------------------------------------------------------`);

console.log(`6) Remove duplicate number from the array`);
console.log(array);
const mySet = new Set(array);
console.log(mySet);
console.log(`------------------------------------------------------------------------------`);