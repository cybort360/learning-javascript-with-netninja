const clock = document.querySelector('.clock');

const tick = () => {
  const now = new Date()

  const hours = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const html = `
  <span>${hours}</span> : 
  <span>${minute}</span> : 
  <span>${second}</span>
  `

  clock.innerHTML = html;
  console.log(hours, minute, second);
};

setInterval(tick, 1000);