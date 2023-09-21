const getTheTitles = function(arrayOfObjects) {
    let arrayOfTitles = [];
    arrayOfObjects.forEach((book) => {
       arrayOfTitles.push(book.title);
    });
    return arrayOfTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
