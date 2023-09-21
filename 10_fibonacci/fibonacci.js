const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    if (num <= 2) return 1;
    if (num > 2){
        return (fibonacci(num - 2) + fibonacci(num - 1));
    }
};

console.log(`Fib: ${fibonacci(7)}`);

// Do not edit below this line
module.exports = fibonacci;
