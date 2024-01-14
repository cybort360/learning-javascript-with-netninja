class User{
  constructor(username, email){
    this.username = username;
    this.email = email;
  }
}

const userOne = new User('mario', 'mario@thentninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');

console.log(userOne, userTwo);