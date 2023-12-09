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

const paras = document.querySelectorAll('p');

paras.forEach(para => {
  para.innerText += ' new text';
  console.log(para.innerText);

});

const people = ['mario', 'luigi', 'ryu'];

people.forEach(person => {
  person.innerHTML = (`${person}`);
  console.log( person);
})

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   alert('Stop Touching me you perv!');
// });

const items = document.querySelectorAll('p');

items.forEach(item => {
  item.addEventListener('click', (e) => {
  // e.target.style.textDecoration = 'line-through'
  // e.target.classList.toggle('hidden');
});
});

const body = document.querySelector('body');

const button = document.querySelector('button');

button.addEventListener('click', () => {
  body.innerHTML += '<li>Something new</li>'
})