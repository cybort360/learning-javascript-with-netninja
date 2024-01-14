function User(usernmae, email){
  this.username = usernmae;
  this.email = email;
}

User.prototype.login = function(){
  console.log(`${this.username} has logged in`);
  return this;
};
User.prototype.logout = function(){
  console.log(`${this.username} has logged out`);
  return this;
};

const userOne = new User('mario', 'mario@thentninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');

console.log(userOne, userTwo);
userOne.login();
userTwo.logout();

userOne.login().logout()