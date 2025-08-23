// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function longestword(word) {
  let bigword=" ";
  const  str=word.split(" ");
  for(let i=0;i<str.length;i++)
  {
    if(str[i].length>bigword.length)
    {
      bigword=str[i];
    }
  }  
  return bigword;
  
}
 console.log(longestword('I am learning Programming to become a programmer'));
