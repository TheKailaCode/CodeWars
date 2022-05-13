function findMultiples(integer, limit) {
    //your code here
    //create an array of digits up to integer
    //check if digits are a multiple of integer using modulo, add to an empty array if so
    //check if array digit multiple is equal to limit
    //if limit is multiple add to empty array and stop loop
  
    let newArray = integer[limit];
    for (let i = 0; i <= integer.length; i++){
      if(i % newArray === 0){
        return integer.fill('').map((_, limit));
      }else if(integer % limit === 0){
        return limit
      }
  }
  }
  //I may have thought too deeply into this problem --- Will retry in the future

  
  ///////INSTRUCTIONS//////
  /*In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.*/