// create a function that will return all even numbers;
// function even_number(numbers)
// {
//     const even=[];
//    for(number of numbers)
//    {
//     if(number%2===0)
//     {
//     //   console.log(number);
//       even.push(number);
       
//     }
  
//    }
//     return even;
// }
// const numbers=[1,2,3,4,5];
// even_number(numbers);
// const evens=even_number(numbers);
// console.log("Even_Number: ",evens);

// write a program sum of even number:
function Evensum(numbers)
{
    var sum=0;
   for(number of numbers)
   {
     if(number%2===0)
     {
       sum=sum+number;
     }
   }
   return sum;
}
console.log(Evensum([1,2,3,4]));