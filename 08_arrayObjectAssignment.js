class Bank  {
    constructor(bankName, location, accountNo, ifsc, interestRate){
        this.bankName = bankName,
        this.location = location,
        this.accountNo = accountNo,
        this.ifsc = ifsc,
        this.interestRate = interestRate
    }
}
let axisBank = new Bank("AXIS Bank", "Pune", 556540, "AXB0000564", "9%");
let sbiBank = new Bank("SBI Bank", "Mumbai", 989023, "SBI0000734", "7%")
let iciciBank = new Bank("ICICI Bank", "Solapur", 345290, "ICIC0001733", "10%");
let kotakBank = new Bank("Kotak Bank", "Kolhapur", 256793, "KKBK000993", "5.6%");
let hdfcBank = new Bank("HDFC Bank", "Pandhapur", 567382, "HDFC0000654", "4%");
let panjabBank = new Bank("Panjab Bank", "Sangola", 795634, "PUNB0000604", "7%");
// console.log(axisBank);
// console.log(sbiBank);
// console.log(iciciBank);
// console.log(kotakBank);
// console.log(hdfcBank);
// console.log(panjabBank);

console.log(``);
console.log(`After adding all elements in array using for of loop`);
const newArray = [
    axisBank,
    sbiBank,
    iciciBank,
    kotakBank,
    hdfcBank,
    panjabBank
];
for (const element of newArray ) {
    console.log(`  Bank name is: ${element.bankName},  Location is: ${element.location}`);
}
console.log(``);

console.log(`Object with name 'Kotak Bank' using for of loop`);
for (const element of newArray) {
    if ((bankName = "Kotak Bank")) {
        console.log(kotakBank);
        break;
    }
}
console.log(``);

console.log(`All details of class array using for loop`);
for (let index = 0; index < newArray.length; index++) {
    const element = newArray[index];
    console.log(element);
}
