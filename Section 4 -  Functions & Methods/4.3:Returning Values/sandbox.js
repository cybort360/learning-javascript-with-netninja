// returning values

const calcArea = function(radius){
  return 3.14 * radius**2;
};

const area = calcArea(5);
console.log(area);

// calculating volume with our area above

const calcVol = function(height){
  return area * height;
}

const volume = calcVol(2);
console.log(volume);