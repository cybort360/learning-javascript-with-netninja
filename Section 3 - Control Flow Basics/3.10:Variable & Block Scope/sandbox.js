// variable & block scope
const age = 30;

if(true){
  const age = 40;
  const myName = 'shaun';
  console.log('inside the 1st code block ', age, myName);

  if(true){
    const age = 50;
    console.log('inside the 2nd code block: ', age);
  }
}

console.log('outside the code block ', age);