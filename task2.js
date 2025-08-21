// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function Oddeven(number)
{
  if(number%2!=0)
  {
   const nm= number*2;
   return nm;
  }
  else{
   const r= number/2;
   return r;
  } 
}
console.log(Oddeven(44));
// it mainly do the odd even  function 
