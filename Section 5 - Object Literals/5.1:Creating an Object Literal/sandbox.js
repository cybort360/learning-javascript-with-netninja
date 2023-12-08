// creating object literals

let user = {
  myName: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.com',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);
console.log(typeof user);

console.log(user.myName);

user.age = 35;
console.log(user.age);

console.log(user['myName']);
user['myName'] = 'chun-li';
console.log(user['myName']);

const key ='location';
console.log(user[key]);