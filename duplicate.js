function noduplicate(numbers)
{
    const dup=[];
   for(number of numbers)
   {
     if(dup.includes(number)===false)
     {
        dup.push(number);
     }
   }
   return dup;
}
const norm_array=[1,2,4,2,3,5,3];
console.log(noduplicate(norm_array));