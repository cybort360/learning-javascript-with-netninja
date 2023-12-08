let user = {
  myName: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.com',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite'],
  login: function(){
    console.log('the user logged in');
  },
  logout: function(){
    console.log('the user logged out');
  },
  logBlogs: function(){
    //console.log(this.blogs);
    console.log('this user has wriiten the following blogs');
    this.blogs.forEach(blog => {
      console.log(blog);
    })
  }
};

user.login();
user.logout();
user.logBlogs();

console.log(this);
console.log()