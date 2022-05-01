// Odd Checker - a function challenge

function isOdd(num){
  // function checks parameter num and returns true if odd and false otherwise
  return !(num % 2 === 0);
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));