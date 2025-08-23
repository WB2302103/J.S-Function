// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98,5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0
// function countingnum(numbers) {
//   let sum=0;
//   for(let i=0;i<numbers.length;i++)
//   {
//     if(numbers.indexOf(numbers[i])!==numbers.lastIndexOf(numbers[i]))
//     {
//        sum++
//     }
//   }
//   return sum;
// }
// console.log(countingnum([5,6,11,12,98,5]));



let numbers =[5,6,11,12,98,5];
let find = 25;
let count=0;
if( numbers.includes(find) ){
    for(let number of numbers){
        if (number==find) {
            count+=1;
    }
    }
    console.log(count)
}else{
    console.log(count)
}