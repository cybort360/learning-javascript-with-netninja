// callback and forEach

const myFunc = (callbackFunc) => {
  // do something
  let value = 50;
  callbackFunc(value);
};

myFunc(value => {
  // do something
  console.log(value);
});

// using forEach

let people = ['shaun', 'mario', 'luigi', 'ryu', 'chunli'];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

people.forEach((person, index) =>{
  console.log(index, person);
})