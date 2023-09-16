const sumAll = function(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') return 'ERROR';
    if (min < 0 || min < 0) return 'ERROR';
    if (min > max) [min, max] = [max, min];
    let total = 0;
    for (let i = min; i <= max; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
