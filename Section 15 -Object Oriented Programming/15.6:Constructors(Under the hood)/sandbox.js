function User(usernmae, email){
  this.username = usernmae;
  this.email = email;
  this.login = function(){
    console.log(`${this.username} has logged in`);
  }
}

const userOne = new User('mario', 'mario@thentninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');

console.log(userOne, userTwo);
userOne.login();