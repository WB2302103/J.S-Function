const today=new Date();
const date=new Date('2062-10-19');
// console.log(date.getMonth());
// console.log(date.getDay());
// mainly number works like array index
// in this we use number so that
// it will take the index 0 value
const specific_date=new Date(2091,0,26);
 console.log(specific_date);
// set month is mainly use to 
// set the month value 
 specific_date.setMonth(10);
//  to local is mainly use for to show the
// time
console.log(specific_date.toLocaleString());
console.log(specific_date.toLocaleString('en-GB'));
// en-GB' is mainly show the :
// date and month and year
// which is similar to our
// country date month and year




