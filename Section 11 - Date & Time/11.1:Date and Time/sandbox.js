// dates & times

const now = new Date();

console.log(now);
console.log(typeof now);

// year, month, day and times

console.log('fullyear:', now.getFullYear());
console.log('month:', now.getMonth());
console.log('date:', now.getDate());
console.log('day:', now.getDay());
console.log('hour:', now.getHours());
console.log('minute:', now.getMinutes());
console.log('second:', now.getSeconds());

// timestamps
console.log('timestamp', now.getTime());

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());