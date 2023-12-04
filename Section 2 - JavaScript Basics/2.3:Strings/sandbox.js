// strings
console.log('hello,world');

let email = "cybort360@gmail.com";
console.log(email);

// string concatenation
let firstName = "Brandon";
let lastName = "Sanderson";

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods

console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@');

console.log(index);

//commom string methods

//let anotherIndex = email.lastIndexOf('m');

// let anotherIndex = email.slice(0, 6);

// let anotherIndex = email.substr(4, 10);

let anotherIndex = email.replace('c', 'y');

console.log(anotherIndex);