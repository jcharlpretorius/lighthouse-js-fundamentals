// Lighthouse Labs prep material Loop code test
/*
Instructions:
We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

    If the number is a multiple of 3, print the string "Loopy" instead of the number.
    If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
    If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.

*/
// create for loop to loop through the numbers from 100 to 200 inclusive
for (let i = 100; i <= 200; i++) {
  // declare a variable for the output and set it equal to an empty string
  let output = '';

  // conditional to check if i is divisible by 3
  if (i % 3 === 0) {
    output += 'Loopy';
  }
  // conditional to check if i is divisible by 4
  if (i % 4 === 0) {
    output += 'Lighthouse';
  }
  // Use a ternary operator to print out the output, either a string or the number value of i
  console.log(output ? output : i);
}