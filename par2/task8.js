'use strict';

function changeCar(inputObject) {
  const newCar = Object.assign({}, inputObject, { passengers: 35 });
  return newCar;
}
function addTonnage(inputObject) {
  const newCar = Object.assign({}, inputObject, { tonnage: 5 });
  return newCar;
}
const car = { massa: 1 };
console.log('Объект car');
console.log(car);
const bus = changeCar(car);
console.log('Объект bus');
console.log(bus);
console.log('Объект car');
console.log(car);
const truck = addTonnage(car);
console.log('Объект truck');
console.log(truck);
console.log('Объект car');
console.log(car);
