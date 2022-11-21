// Global scope
let car = "BMW";

function setCar(newCar) {
  car = newCar;
}

function getCar() {
  return car;
}

function drive() {
  console.log("you are driving", getCar());
}

Array.prototype.log = function() {
  console.log('hello prototype');
}

export { getCar, setCar, drive };
