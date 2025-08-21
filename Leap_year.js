//The year will be leap year if it's divisible by 4
// function Leap_year(year)
// {
//   if(year%4===0)
//   {
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(Leap_year(2052));

// 
//The year will be leap year if it's divisible by 
// 1.year will divide 100 and divide by 400 is leap year
// 2.year will be divide by 4 and not divide by 100 is leap year
// 3.year will divide by 4 is leap year

 function Leap_year(year)
 {
if(year%100===0 && year%400===0)
  {
     return true;
   }
   if(year%4===0 && year%100!==0)
   {
    return true;
  }
}
console.log(Leap_year(2024));
