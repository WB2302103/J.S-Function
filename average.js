function oddavg(numbers)
{
const odd=[];
 for(const number of numbers)
 {
   if(number%2!==0)
   {
     odd.push(number);
   }
 }
 let sum=0;
 for(const oddaverage of odd)
 {
   sum=sum+oddaverage;
 }
 console.log("Odd_number: ",odd);
 const odd_length=odd.length;
 const odd_sum=sum;
 const average_odd=odd_sum/odd_length;
 const result_average=["Odd_number _average: "]+[average_odd];
  return result_average;
}
const nm=[1,3,5,7,11,44,42,40];
const avg=oddavg(nm);
console.log(avg);
