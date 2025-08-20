function add(number1,number2)
{
    const sum=number1+number2;
    return sum;
}
console.log(add(4,3));
// shortcut return:
function add2(num1,num2)
{
    return num1+num2;
}
console.log(add2(4,4));

function domath(number1,number2)
{
    const sum=number1+number2;
    const diff=number1-number2;
    const mul=sum*diff;
    const result=mul/2;
    return result;
}
console.log(domath(160,120));

function even(number)
{
    if(number%2===0)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(even(60));