const car = {
    carName : "Creta SX",
    company : "hundai",
    launchYear : 2017
}

// console.log(car);
const carEngine = {
    enginePower : "1499CC",
    maxPower : "113 BHP"
}

// console.log(carEngine);
console.log(`Merging car and carEngine objects using Object.assign`);
const mergeObject = Object.assign(car, carEngine);
console.log(mergeObject);
console.log(``);

console.log(`Merging car and carEngine objects using spread operator`);
const spreadObject = {...car, ...carEngine};
console.log(spreadObject);