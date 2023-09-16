const removeFromArray = function(arr, ...args) {
    let newArray = arr.filter((value) => { return !args.includes(value)});
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
