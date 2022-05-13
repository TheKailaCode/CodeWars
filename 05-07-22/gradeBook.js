// Instructions

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade(s1, s2, s3) {
    // Code here
    let average = (s1 + s2 + s3) / 3

    if (average >= 90 && average <= 100) {
        return 'A'
    } else if (average >= 80 && average < 90) {
        return 'B'
    } else if (average >= 70 && average < 80) {
        return 'C'
    } else if (average >= 60 && average < 70) {
        return 'D'
    } else if (average >= 0 && average < 60) {
        return 'F'
    }
}