// Nullish Coalescing Operator ??
// will return the righthand side operand of the if the lefthand side operand is null or undefined otherwise leftside

// let name;
// console.log(name ?? "anonymous");

// newName = 'jonny';
// console.log(newName ?? "anonymous");

// let name;
// console.log(name || "anonymous");

// newName = '';
// console.log(newName || true);


// newNametwo = 'aaa';
// console.log(newNametwo ?? 1);

// let person = {
//     profile: {
//       name: null,
//       age: 0
//     }
//   };
  
//   console.log(person.profile.name || "Anonymous");
//   console.log(person.profile.age || 18);

// console.log(person.profile.name ?? "Anonymous");
// console.log(person.profile.age ?? 18);

// null ?? undefined ?? false ?? 'hello' 
// null ?? '' ?? 'hello' 


// code shortened 
// const firstSource = await fetch('...')
// const secondSource = await fetch('...')
// const defaultSource = { heading: 'Default Data Source' }

// const ourSources = firstSource ?? secondSource ?? defaultSource