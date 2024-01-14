const userOne = {
  usernmae: 'ryu',
  email: 'ryu@thenetninja.co.uk',
  login(){
    console.log(userOne.usernmae, 'logged in')
  },
  logout(){
    console.log(userOne.usernmae, 'logged out')
  }
};

console.log(userOne);
userOne.login();
userOne.logout();

const userTwo = {
  usernmae: 'mario',
  email: 'mario@thenetninja.co.uk',
  login(){
    console.log(userTwo.usernmae, 'logged in')
  },
  logout(){
    console.log(userTwo.usernmae, 'logged out')
  }
};

console.log(userTwo);
userTwo.login();
userTwo.logout();