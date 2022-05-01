/** X Marks the Perfect Shot: Lighthouse labs prep material assignment for functions in JS
 * 
 */

 const finalPosition = function (moves) {
  // calculate the final position after a series of moves in an cartesian plane
  let x = 0; 
  let y = 0;
  for (const move of moves) {
    // switch statement for moves
    switch(move) {
    case 'north': 
      y++;
      break;
    case 'south':
      y--;
      break;
    case 'east':
      x++;
      break;
    case 'west':
      x--;
      break;
    default:
      console.log("Not a valid direction");
    }
  }
  return [x, y];
}


const moves = ['north', 'north', 'west', 'west', 'north', 'east','north', 'butt'];  

finalPosition(moves);
// expected output: [-1, 4]
console.log(finalPosition(moves));
