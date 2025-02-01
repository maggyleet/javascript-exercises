const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((num, total) => num + total , 0);
};

const multiply = function(arr) {
	return arr.reduce((num, total) => num * total , 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  let fact = 1;
	while(num>0){
    fact*=num--;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
