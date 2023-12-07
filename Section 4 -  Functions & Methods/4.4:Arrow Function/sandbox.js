// regular function
// const calcArea = function(radius){
//   return 3.14 * radius**2;
// };

// arrow function
const calcArea = (radius) => {
  return 3.14 * radius**2
}

const area = calcArea(5);
console.log(area);

// practise arrow function

//regular function

// const greet = function(){
//   return'Hello, world';
// };

// greet();

// const bill  = function(products, tax){
//   let total =  0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// console.log(bill([15,40,30]), 0.2);

//arrow function

const greet = () => {
  return 'Hello, people';
};

const result = greet();
console.log(result);

const bill  = (products, tax) => {
  let total =  0;
  for(let i = 0; i < products.length; i++){
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([15,40,30], 0.2));