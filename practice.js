

const response = {
    maran : {
        count : 1,
    },
    gas : {
        count : 2,
    },
    prelude : {
        count : 5,
    },
    keys : ['maran', 'gas', 'prelude'],
};
let sum = 0;
for (const element of response.keys) {
    sum = sum + response[element].count;
}
console.log(`The sum of all count values is: ${sum}`);



var entries = [1, 2, 3, 4, 5, 6, 7];
console.log(entries.length);
entries.length = 4;
console.log(entries.length);
console.log(entries);

const words = ["follow", "for", "more"];
console.log(words.join());
console.log(words.join(" "));

const array = [1, 2, 3, 4, 5];
console.log(array.includes(3));
console.log(array.includes(9));

const numbers = [1, 3, 4, 6, 10];
const indexOf10 = numbers.indexOf(10);
console.log(indexOf10);

const arrayOfNums = [1,2,3,4,6,,88,3,2,6];
const newArray = [...new Set(arrayOfNums)];
console.log(newArray);