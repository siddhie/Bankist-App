const dataJulia = [3, 5, 2, 12, 7];
const dataKate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  let dogsJuliaCopy = [...dogsJulia];
  dogsJuliaCopy.shift();
  dogsJuliaCopy.splice(-2);
  //   console.log(dogsJuliaCopy);

  let newArr = dogsJuliaCopy.concat(dogsKate);

  newArr.forEach(function (value, i) {
    if (value < 3) console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    else
      console.log(
        `Dog number ${i + 1} is an adult, and is ${value} years old `
      );
  });
};

checkDogs(dataJulia, dataKate);
console.log('ANother-----------------');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(mov => (mov <= 2 ? mov * 2 : 16 + mov * 4));
//   // return humanAge;

//   const filteredDogs = humanAge.filter(mov => mov > 18);
//   const averageHumanAge = filteredDogs.reduce(
//     (accu, mov) => accu + mov / filteredDogs.length,
//     0
//   );
//   return averageHumanAge;
// };
const calcAverageHumanAge = function (ages) {
  const averageHumanAge = ages
    .map(mov => (mov <= 2 ? mov * 2 : 16 + mov * 4))
    .filter(mov => mov > 18)
    .reduce((accu, mov) => accu + mov / filteredDogs.length, 0);
  return averageHumanAge;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
