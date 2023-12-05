// for loop

// for(let i = 0; i < 5; i++){
//   console.log('in loop: ', i);
// }

// console.log('loop finished');

const names = ['mario', 'luigi', 'shaun'];

for(let i = 0; i < names.length; i++){
  // console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}

console.log('you are eligible');