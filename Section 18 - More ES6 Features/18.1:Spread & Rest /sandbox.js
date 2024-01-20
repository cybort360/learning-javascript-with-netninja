// rest parameter
const double = (...nums) => {
  // do something
  console.log(nums);
  return nums.map(num => num*2);
}

const result = double(1,3, 5, 7, 9, 8, 4, 6);
console.log(result);

// spread syntax(array)
const people = ['shaun', 'ryu', 'yoshi'];
const members = ['mario', 'luigi', ...people]

console.log(members);

// spread parameter(object)

const person = {
  name: 'shaun',
  age: 30,
  job: 'dev'
}

const personClone = {...person, location: 'manchester'};
console.log(personClone);