//instructions

/*There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!*/


function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    /*let classArr = classPoints.push(yourPoints)
    let sum = classArr.reduce() 
    let avg = sum / classArr(classArr.length)*/
    let classPointsNewArr = classPoints.concat(yourPoints)
    let sum = classPointsNewArr.reduce((acc, i) => { acc + i, 0 });
    let avg = sum / classPointsNewArr.length


    if (avg < yourPoints) {
        return true;
    } else {
        return false;
    }
}

//Did not complete this task. Will practice again in the future