console.log(`1) and  2)`);
function Bank(bankName, location, ifscCode, code) {
this.bankName = bankName,
this.location = location,
this.ifscCode = ifscCode,
this.code = code
}
Bank.prototype.message = (`  The open time of the sbiBank is "9 AM IST" and close time is "6 PM IST"`);
Bank.prototype.message1 = (`  The open time of the axisBank is "9 AM IST" and close time is "6 PM IST"`);
Bank.prototype.message2 = (`  The Bank name is "YES Bank". Branch code is "3344". Open time is "9 PM IST"`);
let yesBank = new Bank("YES Bank", "Mumbai", "YES000033", 3344);
let sbiBank = new Bank("SBI Bank", "Pune", "SBI000034", 6899);
let mahBank = new Bank("Maharashtra Bank", "Solapur", "MHB005434", 4523);
let axisBank = new Bank("AXIS Bank", "Thane", "AXS000035", 9867);
console.log(`  Bank details is--> "Bank Name: ${yesBank.bankName}, Location: ${yesBank.location}, IFSC: ${yesBank.ifscCode}, Code: ${yesBank.code}`);
console.log(`  Bank details is--> "Bank Name: ${sbiBank.bankName}, Location: ${sbiBank.location}, IFSC: ${sbiBank.ifscCode}, Code: ${sbiBank.code}`);
console.log(`  Bank details is--> "Bank Name: ${mahBank.bankName}, Location: ${mahBank.location}, IFSC: ${mahBank.ifscCode}, Code: ${mahBank.code}`);
console.log(`  Bank details is--> "Bank Name: ${axisBank.bankName}, Location: ${axisBank.location}, IFSC: ${axisBank.ifscCode}, Code: ${axisBank.code}`);
console.log(``);

console.log(`5)`);
console.log(yesBank.message);
console.log(``);
console.log(`6)`);
console.log(yesBank.message1);
console.log(``);
console.log(`7)`);
console.log(yesBank.message2);