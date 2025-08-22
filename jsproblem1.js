// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celtofarenheight(value1,value2,value3)
{
  const formula=(value1*(value2/value3))+32;
  const result=["Celcious to Farenheight: "]+[formula]+["°F"];
  return result;
}
console.log(celtofarenheight(24,9,5));