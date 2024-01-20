const namesArray = ['ryu', 'shaun', 'ryu', 'chun-li'];
console.log(namesArray);

// const nameSet = new Set(namesArray);
// console.log(nameSet);

// const uniqueNames = [...nameSet];
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const age = new Set()

age.add(20);
age.add(25).add(30);
age.add(25);
age.delete(25)

console.log(age, age.has(25) , age.size, age.has(30));

age.clear()
console.log(age);

const ninjas = new Set([
  {name: 'shaun', age: 30},
  {name: 'crystal', age: 25},
  {name: 'chun-li', age: 20}
]);

ninjas.forEach(ninja => {
  console.log(ninja.name, ninja.age);
})