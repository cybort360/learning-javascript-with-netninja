// const calcArea = function(radius){
//   return 3.14 * radius ** 2;
// };

// const area = calcArea(5);
// console.log(area);

// const volume = function(height){
//   return area * height;
// };

// const calcVol = volume(2);
// console.log(calcVol);


const calcVolume = (radius, height) => {
  return 3.14 * radius**2 * height;
};

const volume = calcVolume(5,2);
console.log('the volume is: ', volume);

const myFunc = (potato) => {
  let value = 100;
  potato(value);
};

myFunc(function(value){
  console.log(value);
});


let people = ['mario', 'shaun', 'potato'];

people.forEach((person, index) => {
  console.log(index, person);
});
