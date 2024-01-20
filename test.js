//rough work

// const calcArea = function(radius){
//   return 3.14 * radius ** 2;
// };

// const area = calcArea(5);
// console.log(area);

// const volume = function(height){
//   return area * height;
// };

// const calcVol = volume(2);
// console.log(calcVol);


// const calcVolume = (radius, height) => {
//   return 3.14 * radius**2 * height;
// };

// const volume = calcVolume(5,2);
// console.log('the volume is: ', volume);

// const myFunc = (potato) => {
//   let value = 100;
//   potato(value);
// };

// myFunc(function(value){
//   console.log(value);
// });


// let people = ['mario', 'shaun', 'potato'];

// people.forEach((person, index) => {
//   console.log(index, person);
// });


// let scoreOne = 50;
// let scoreTwo = scoreOne;

// scoreOne = 100;

// console.log(scoreOne);
// console.log(scoreTwo);

// const userOne = {
//   usernmae: 'shaun',
//   score: 100
// }

// const userTwo = userOne;

// console.log(userOne);
// console.log(userTwo);

// userOne.usernmae = 'mario';

// console.log(userOne);
// console.log(userTwo);

// const para = document.querySelector('body > p:nth-child(3)');
// console.log(para);

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//   para.innerText += ' new text';
//   console.log(para.innerText);

// });

// const people = ['mario', 'luigi', 'ryu'];

// people.forEach(person => {
//   person.innerHTML = (`${person}`);
//   console.log( person);
// })

// // const button = document.querySelector('button');

// // button.addEventListener('click', () => {
// //   alert('Stop Touching me you perv!');
// // });

// const items = document.querySelectorAll('p');

// items.forEach(item => {
//   item.addEventListener('click', (e) => {
//   // e.target.style.textDecoration = 'line-through'
//   // e.target.classList.toggle('hidden');
// });
// });

// const body = document.querySelector('body');

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   body.innerHTML += '<li>Something new</li>'
// })

const scores = [10, 20, 30, 15, 25, 50, 40, 51];

// const filteredScore = scores.filter((score) => {
//   if(score > 20){
//     return true;
//   }
// })

// console.log(filteredScore);

// const firstHighScore = scores.find((score) => {
//   if(score > 50){
//     return true;
//   }
// });

// console.log(firstHighScore);

// const mapScores = scores.map((score) => {
//   return score/2;
// });

// console.log(mapScores);

// const potato = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const data = await response.json();

//  return data;
// }

// potato().then((data) => {
//   console.log(data);
// })

// class User {
//   constructor(username){
//     this.username = username;
//   }
// }

// class Admin extends User{
//   deleteUser(){
//     console.log('admin can delete user');
//     return this;
//   }
// }
// const userOne = new User('mario');
// const userTwo = new User('luigi');

// console.log(userOne, userTwo);

// const adminOne = new Admin('potato');

// console.log(adminOne);

// function Test(username){
//   this.username = username;
// }

// Test.prototype.logout = function(){
//   console.log(`${this.username} has logged out`);
// };


// function wadmin(username, title){
//   Test.call(this, username);
//   this.title = title;
// }

// wadmin.prototype = Object.create(Test.prototype);
// wadmin.prototype.deleteUser = function(){
//   //delete user
// }

// function superAdmin(username, title, position){
//   wadmin.call(this, username, title);
//   this.position = position;
// }

// superAdmin.prototype = Object.create(wadmin.prototype);
// superAdmin.prototype.createUser = function(){
//   //create user
// }
// const testOne = new Test('potato');
// const wad = new wadmin('notwad', 'mr');
// const superStuff = new superAdmin('shaun', 'mister', 'Ceo');

// console.log(testOne, wad, superStuff);

// testOne.logout();
// wad.logout();


const setNames = new Set(['potato', 'olamide', 'octane', 'potato']);

console.log(setNames);

const unique = [...setNames];

console.log(unique);

const ages = new Set();
ages.add(20);
ages.add(25);
if(ages.has(30)){
  alert('it is present');
} else {
  alert('it does not')
}

console.log(ages);