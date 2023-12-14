const correctAnswers = ['B','B', 'B', 'B'];
const form = document.querySelector('form');
const result = document.querySelector('section');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score =  0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // checkanswers
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
      score += 25;
    }
  });

  // show result on page
  scrollTo(0,0);
  result.querySelector('span').textContent= `${score}%`;
  result.classList.remove('hidden');

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent= `${output}%`;
    if(output === score){
      clearInterval(timer);
    } else {
      output++;
    }
  }, 20);

});
