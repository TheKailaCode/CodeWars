//Instructions

/**** No Loops Allowed ***

You will be given an array (a) and a value (x). 
All you need to do is check whether the provided array contains the value, 
without using a loop.
Array can contain numbers or strings. 
X can be either. Return true if the array contains the value, false if not. 
With strings you will need to account for case.*/

function check(a, x) {
    let inclusive = a.includes(x);

    if (inclusive) {
        return true
    } else {
        return false
    }
};

  //use the includes method to search an array for a specific value
  //a conditional is used to test whether that value is present or not