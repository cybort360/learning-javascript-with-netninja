// arguments & parameters

const speak = function(myName = 'user', time = 'night'){
  console.log(`good ${time} ${myName}`) ;
};

speak();
speak('shaun', 'afternoon');