/**
 * Age Calculator - function assignment for Lighthousl Labs prep 
 */

const ageCalculator = function(name, yearOfBirth, currentYear) {
  /* This function calculates someone's age using their birth year and current year
  returns a string explaining how old the person is
  */ 
  let age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));