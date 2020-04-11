//Array.flatMap()//

const confession = ['I', 'love', 'javascript'];
console.log(confession.map(me=>[me.split('')]));

const confessionOne = ['Coding', 'love', 'javascript'];
console.log(confessionOne.flatMap(me=>me.concat('')));


const countries = ['Japan', 'USA', 'UK', 'Sudan'];
const food = ['Shushi', 'Burger', 'Fries'];
const mapped = countries.map((countries, index) => [countries, food[index]]);
const mappedAndFlatten = countries.flatMap((countries, index) => [countries, food[index]]);
console.log(mapped.flat());
console.log(mappedAndFlatten);
