// const blogs = [
//   {title: 'why mac and cheese rules', likes: 30},
//   {title: '10 things to do with marmite', likes: 50}
// ];

// console.log(blogs);

let user = {
  myName: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.com',
  location: 'berlin',
  blogs: [
    {title: 'why mac and cheese rules', likes: 30},
    {title: '10 things to do with marmite', likes: 50}
  ],
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
      console.log(blog.title, blog.likes);
    })
  }
};

user.logBlogs();