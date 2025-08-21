function inchtofit(inch)
{
//  const feet_fraction=inch/12;
// to remove the decimel we use perseint
// like 75 answer is 6.25 inch so main
// ans is 6 to so to show this we
// use parseint to remove the fraction
const feet_number=parseInt(inch/12);
// to find inch to feet 
const inch_remaining=inch%12;
const result=["Feet_Number:"]+[feet_number]+["  "]+["Inch_Remaining:"]+[inch_remaining];
 return result;
}

const a_personheight=75;
// console.log(inchtofit(a_personheight));

// covert miles to kilometer:
// use the formula :1.60934
function miles(nm)
{
  const kilo=nm*1.60934;
  return kilo;
}
// console.log(miles(12).toFixed(4));

// covert to kilometer to miles
// use to formula 0.62137119 kilometer
function kilometertomiles(ml)
{
    const Miles=ml*0.62137119;
    // const result=["Kilometer_to_Mile:"]+[Miles];
    return Miles;
}
console.log(kilometertomiles(12).toFixed(3));