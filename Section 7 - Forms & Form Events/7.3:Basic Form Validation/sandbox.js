const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback')


form.addEventListener('submit', e => {
  e.preventDefault();

  //validation
const username = form.username.value;
const usernamePattern = /^[a-zA-Z]{6,12}$/;

if(usernamePattern.test(username)){
  //feedback good info
  feedback.textContent ='that usernmae is valid!'
} else {
  // feedback help info
  feedback.textContent = 'username must contain text only and be between 6 & 12 characters long!'
}

});