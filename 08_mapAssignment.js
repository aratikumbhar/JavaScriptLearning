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
const mapOfBankDetail = new Map();
mapOfBankDetail.set(556540, axisBank);
mapOfBankDetail.set(989023, sbiBank);
mapOfBankDetail.set(345290, iciciBank);
mapOfBankDetail.set(256793, kotakBank);
mapOfBankDetail.set(567382, hdfcBank);
mapOfBankDetail.set(795634, panjabBank);

console.log(`  Create the map in such a way that key should be bank account number and value is object.`);
console.log(`Keys`);
const keyOfMapDetails = mapOfBankDetail.keys();
console.log(keyOfMapDetails);
console.log(``);

console.log(`Values`);
console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(panjabBank);
console.log(``);

console.log(`Travarse the map and log Bank name, Account number, Interest rate`);
for (const iterator of keyOfMapDetails) {
    const elements = mapOfBankDetail.get(iterator);
    console.log(` ${elements.bankName},  Account No: ${elements.accountNo},  Interest Rate: ${elements.interestRate}`);
}