const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
  alert('OI! my content is copyrighted!');
});

const box = document.querySelector('.box');
box.addEventListener('mousemove', e => {
  // e.in(e.offsetX, e.offsetY);
  box.textContent =  `x pos - ${e.offsetX}, y pos - ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
  console.log(e.pageX, e.pageY);
})