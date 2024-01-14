class User{
  constructor(username, email){
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login(){
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout(){
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore(){
    this.score ++;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

class Admin extends User{
  deleteUser(user){
    users = users.filter((u) => {
      return u.username !== user.username;
    })
  }
}

const userOne = new User('mario', 'mario@thentninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');
const userThree = new Admin('shaun', 'shuan@thenetninja.co.uk');

console.log(userOne, userTwo, userThree);
userOne.login().incScore().incScore().logout();

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);