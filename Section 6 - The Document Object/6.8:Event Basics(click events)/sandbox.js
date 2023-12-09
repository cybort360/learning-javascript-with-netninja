// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('this is a pop-up');
// });

const items = document.querySelectorAll('li');
const button = document.querySelector('button');

items.forEach(item => {
  item.addEventListener('click', (e) => { 
    e.target.style.textDecoration = 'line-through'
  });
//   button.addEventListener('click', () => {
//     item.classList.remove('hidden');
// });
});