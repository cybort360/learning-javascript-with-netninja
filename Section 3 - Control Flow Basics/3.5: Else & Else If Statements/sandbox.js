const password ="p@ssword12345";

if(password.length >= 12){
  console.log('password is super long enough')
} else if(password.length >= 8){
  console.log('that password is long enough');
} else {
  console.log('password is not long enough');
}