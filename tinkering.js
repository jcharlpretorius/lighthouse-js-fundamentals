/*
function divide (dividend, divisor) {
  return dividend / divisor;
}

let quotient = divide(100 , 3);

console.log(quotient);
*/
/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 */
 


// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
/*
var shirtWidth = 18;
var shirtLength = 28;
var shirtSleeve = 8.13;
*/


//var arr=[18, 28, 8.13]
//var arr=[19.99, 28.99, 8.379]
//var arr=[20, 29, 8.38]
//var arr=[22, 30, 8.63]
//var arr=[24, 31, 8.88]
//var arr=[26, 33, 9.63]
//var arr=[27.99, 33.99, 10.129]
//var arr=[28, 34, 10.13]
//var arr=[18, 29, 8.47]
var arr=[18, 28, 8.13]

var shirtWidth = arr[0];
var shirtLength = arr[1];
var shirtSleeve = arr[2];


/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13]
 * [19.99, 28.99, 8.379]
 * [20, 29, 8.38]
 * [22, 30, 8.63]
 * [24, 31, 8.88]
 * [26, 33, 9.63]
 * [27.99, 33.99, 10.129]
 * [28, 34, 10.13]
 * [18, 29, 8.47]
*/

// WRITE YOUR CODE HERE
var size = "NA";
// test if below small size
//if ((shirtWidth < 20) && (shirtLength < 29) && (shirtSleeve <= 8.38)) {
if ((18 <= shirtWidth && shirtWidth < 20) && (28 <= shirtLength && shirtLength< 29) && (8.13 <= shirtSleeve && shirtSleeve<= 8.38)) {
//if ((shirtWidth>=18 && shirtWidth<20) && (shirtLength>=28 && shirtLength<29) && (shirtSleeve>=8.13 && shirtSleeve<8.38) ) {  
// shirt is size small
   size = "S";
}
else if ((20 <= shirtWidth && shirtWidth < 22) && (29 <= shirtLength && shirtLength< 30) && (8.38 <= shirtSleeve && shirtSleeve< 8.63)) {
    // shirt is size medium
    size = "M";
}   
else if ((22 <= shirtWidth && shirtWidth< 24) && (30 <= shirtLength && shirtLength< 31) && (8.63 <= shirtSleeve && shirtSleeve< 8.88)) {
    // shirt is size large
    size = "L";
}
else if ((24 <= shirtWidth && shirtWidth< 26) && (31 <= shirtLength && shirtLength< 33) && (8.88 <= shirtSleeve && shirtSleeve< 9.63)) {
    // shirt is size XL
    size = "XL";
} 
else if ((26 <= shirtWidth && shirtWidth< 28) && (33 <= shirtLength && shirtLength< 34) && (9.63 <= shirtSleeve && shirtSleeve< 10.13)) {
    // shirt is size 2XL
    size = "2XL";
}
else if ((28 <= shirtWidth ) && (34 <= shirtLength) && (8.13 <= shirtSleeve)) {
    // shirt is size 3XL
    size = "3XL";
}
else {
    size = "N/A";
}
console.log(size);