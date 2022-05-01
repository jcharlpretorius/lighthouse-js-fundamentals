/** Lighthouse labs prep - function assignment howManyHundreds
 * write a function to determine how many containers will be sent up to mars
 * each container holds exactly 100 bottles of maple syrup
 * container won't be sent up unless it is full
 * given a number of bottles, determine how many containers can be filled and sent
*/

const howManyHundreds = function(bottles) {
  // divide the number of bottles by 100 and round down to the nearest integer 
  return Math.floor(bottles / 100);
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);