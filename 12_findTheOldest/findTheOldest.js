const findTheOldest = function(personObjects) {
    let oldestPerson = {age: 0, index: 0};
    const now = new Date().getFullYear();
    personObjects.forEach((person, index) => {
        age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : now - person.yearOfBirth;
        if (oldestPerson.age < age){
            oldestPerson.age = age;
            oldestPerson.index = index;
        }
    });
    return personObjects[oldestPerson.index];
};

// Do not edit below this line
module.exports = findTheOldest;
