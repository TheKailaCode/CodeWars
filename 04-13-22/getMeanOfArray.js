//Instructions

/*It's the academic year's end, fateful moment 
of your school report. The averages must be calculated. All the students come to 
you and entreat you to calculate their average for them. Easy ! 
You just need to write a script.
Return the average of the given array rounded 
down to its nearest integer.*/

function getAverage(marks) {
    //TODO : calculate the downward rounded average of the marks array
    let sum = marks.reduce((acc, c) => acc + c, 0);
    let avg = sum / marks.length
    let total = Math.floor(avg)
    return total
}

  //We need the average for all of the marks so 
  //the formula for average is the sum of all numbers divided by the amount of numbers in the array
  //we can use the reducde method to add elements and divide the sum by the length of the array
  //the math.floor method will round down to the nearest integer value