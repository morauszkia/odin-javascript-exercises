const findTheOldest = function (peopleArr) {
  const ages = peopleArr.map(
    (person) => (person.yearOfDeath || 2023) - person.yearOfBirth
  );
  console.log(ages);
  const oldestIdx = ages.findIndex((age) => age === Math.max(...ages));
  console.log(oldestIdx);

  return peopleArr[oldestIdx];
};

// Do not edit below this line
module.exports = findTheOldest;
