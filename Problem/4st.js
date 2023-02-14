// create a callback function in javascript or html to find if a number is even or odd.
// Return "even" if number is even else odd.

function CS(number)
{
  if (number < 0) 
  {
    number = Math.abs(number);
  }
  if (number===0) 
  {
    return true;
  }
  if (number===1) 
  {
    return false;
  }
  else 
  {
    number = number - 2;
    return CS(number);
  }
}
console.log(CS(234)); //true
console.log(CS(-45)); // false
console.log(CS(65)); // false