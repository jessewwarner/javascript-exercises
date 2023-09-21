const palindromes = function (str) {
    let checkStr = str.toLowerCase();
    matches = checkStr.match(/[a-zA-Z0-9]+/g);
    checkStr = matches.join('')
    let revStr = checkStr.split('').reverse().join('');
    return checkStr === revStr;
};

// Do not edit below this line
module.exports = palindromes;
