// import {} from './car.js';
//IIFE
//

// rest

const params = { name: "Hello", age: 42 };

const shallowCopyParams = params; // shallow copy params

const deepCopyParams = { ...params }; // deep copy params

const deepCopyParams2 = JSON.parse(JSON.stringify(params));

const deepCopyParams3 = Object.assign({}, params);

deepCopyParams2.name = "World";

// console.log(params);
// console.log(deepCopyParams2);
// function info({name, age}){
//   console.log(`name: ${name}. age: ${age}`);
// };

// info(...params);

const cart = [
  { name: "Cam", price: 10, quantity: 1 },
  { name: "Tao", price: 20, quantity: 1 },
  { name: "Xoai", price: 30, quantity: 1 },
  { name: "Nhan", price: 25, quantity: 1 },
  { name: "Mit", price: 15, quantity: 1 },
];

function getCartPriceTotal(cart) {
  if (cart.length === 0) {
    return 0;
  }

  const callback = (total, item) => {
    return total + item.price * item.quantity;
  };
  return cart.reduce(callback, 0);
}

console.log(getCartPriceTotal(cart));
