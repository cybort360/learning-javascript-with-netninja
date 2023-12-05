let ninjas = ['shaun', 'ryu', 'chun-li'];

console.log(ninjas);

ninjas[1] ='ken';
console.log(ninjas[1]);

let ages = [20, 25, 30, 35];
console.log(ages);

console.log(ages[2]);

let random = ['shaun', 'crystal', 30, 20];
console.log(random);

console.log(ninjas.length);

// array methods

// let result = ninjas.join(',');
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken', 'crystal']);
let result = ninjas.push('ken'); //adds the variable to the lenght of the array
result = ninjas.pop(); //removes the last variable

console.log(result);

let anotherNinja = ['potato', 'yam'];

let anotherResult = ninjas.concat(anotherNinja);

console.log(anotherResult);