const para = document.querySelector('p');

// console.log(para.innerText);

// para.innerText = 'ninjas are awesome';

const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//   para.innerText += ' new text';
//   console.log(para.innerText);
// })

const content = document.querySelector('.content');

// console.log(content.innerHTML);
//content.innerHTML += '<h2>THIS IS A NEW H2</h2>'

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
});