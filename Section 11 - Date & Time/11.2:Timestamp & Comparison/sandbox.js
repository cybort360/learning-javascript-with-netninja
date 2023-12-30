// timestamp
const before = new Date('February 1 2019 7:30:59');
const now = new Date();

//console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();

console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours =Math.round(mins / 60); 
const days = Math.round(hours / 24);
const weeks = Math.round(days / 7);

console.log(mins, hours, days, weeks);

console.log(`
this blog was written ${days} ago
`);

//converting timestamp intp date objects

const timestamp = 123455675671;

const newTime = new Date(timestamp);

console.log(newTime.getFullYear());
console.log(newTime.getTime());

console.log(newTime);