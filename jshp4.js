// Write a function to count the number of vowels in a string.
function countingvowels(number) 
{
    let count =0;
    let char='aeiou';
   for(let i=0;i<number.length;i++)
   {
    if(char.includes(number[i]))
    {
     count++;
    }
   }
   return count;
}
const st="Rifayee";
const er=st.toLocaleLowerCase();
console.log(countingvowels(er));
