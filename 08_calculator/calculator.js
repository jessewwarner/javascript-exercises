const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(arr) {
	total = 0;
  arr.forEach((num) => {
    total += num;
  });
  return total;
};

const multiply = function(arr) {
  total = 1;
  arr.forEach((num) => {
    total *= num;
  });
  return total;
};

const power = function(a, b) {
  return a ** b;	
};

const factorial = function(num) {
  num = num > 0 ? num : 1;
	for (let i = num - 1; i > 0; i--){
    num *= i;
  }
  return num;
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
