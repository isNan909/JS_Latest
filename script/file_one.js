//Array.flat()//


const lang = [ ['go', 'rust'], ['javascript']];
const makeFlat = [].concat.apply([], lang);


const launguagesOne = ['python', 'go', ['javascript', 'dart', ['coffeescript', 'webassembly']]];
console.log(launguagesOne.flat(0));

 
const launguagesTwo = ['python', 'go', , , ['javascript', 'dart', ['coffeescript', 'webassembly']]];
console.log(launguagesTwo.flat(1));

// array with empty slots


const launguagesThree = ['python', 'go', ['javascript', 'dart', ['coffeescript', 'webassembly', ['rust']]]];
console.log(launguagesThree.flat(2));


const launguagesFour = ['python', 'go', , ,  ['javascript', 'dart', ['coffeescript', 'webassembly', ['rust']]]];
console.log(launguagesFour.flat(Infinity));



