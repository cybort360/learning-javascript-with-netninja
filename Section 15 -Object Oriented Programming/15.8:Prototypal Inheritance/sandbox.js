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

function Admin(username, email, title){
  User.call(this, username, email);
  this.title = title
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(){
  //delete User;
}

const userOne = new User('mario', 'mario@thentninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');
const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk', 'black-belt-ninja');

console.log(userOne, userTwo, userThree);
userOne.login();
userTwo.logout();

