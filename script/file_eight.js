// Sorting Array

const countries=[
    {name: "Mexico", count:1},
    {name: "Japan", count:20},
    {name: "Nepal", count:19},
    {name: "Russia", count:3},
    {name: "Bhutan", count:4},
    {name: "USA", count:10},
    {name: "Canada", count:15}
];



const sortAnother= countries.sort((x,y)=>x.count-y.count);
console.log(sortAnother)


// mimic table sorting like ES2019

countries.map((count, index)=>{
    count.index = index;
    return count;
});

countries.sort((a,b)=>{
    if(a.count === b.count){
        return a.index - b.index;
    }
    return a.count - b.count;
});

console.log(countries);
