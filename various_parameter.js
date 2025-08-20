// for finding string length
function Evenstring(str)
{
 const striln=str.length;
//  console.log(str,striln);

 if(striln%2===0)
 {
    // console.log("Even_size");
    // console.log(true);
 }
 else {
//    console.log("Odd_size");
//    console.log(false);
 }
}
// Evenstring("Dhaka");
// Evenstring("kapa");

function double_or_triple(number,do_double)
{
    if(do_double===true)
    {
        const result=number*2;
        return result;
    }
    else{
        const result=number*3;
        return result;
    }
}
console.log(double_or_triple(5,true));
console.log(double_or_triple(5,false));
// function number_of_elements(number)
// {
//  const len=number.length;
//  return len;
// }
// number_of_elements([14,15,12,454,4545,87987,11])


function getage(person)
{
    const age=person;
    return age;
}
console.log(getage("45"));