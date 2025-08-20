// write a function to give me the sum of all number in array
// step 1:Declare a function
// step2:Call the function  and wheater the function is called properly 
// step 3:set parameter (s);
// then do the question operation
// declaration part
function sumofArray(numbers)
{
var sum=0;
  for(number of numbers)
  {
    sum=sum+number;
  }
  return sum;
}
// calling part:
// value set
// var arr=[1,2,3,4,5];
// console.log(sumofArray(arr));
const numbes=[1,2,3,4,5];
const sum=sumofArray(numbes);
console.log("Sum_of_array: ",sum);