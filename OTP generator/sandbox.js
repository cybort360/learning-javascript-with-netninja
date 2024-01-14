const button = document.querySelector('button');
const display = document.querySelector('div');

const generateOtp = () => {
  const otp = Math.floor(100000 + Math.random() * 900000);

  const html = `${otp}`;
  display.innerHTML = html;
}

button.addEventListener('click', generateOtp);