// Object.fromEntries(someIterable)


const programmer = {name: 'john', launguage: 'javascript'};
console.log(Object.entries(programmer));


const reverseProgrammer = [['name', 'john'], ['launguage', 'javascript']];
console.log(Object.fromEntries(reverseProgrammer));
