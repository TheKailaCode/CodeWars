// Instructions

// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads. If there are less than 2 blue beads return 0.

function countRedBeads(n) {
    let redBeads = 0
    for (let i = 2; i <= n; i++) {
        redBeads += 2
    }
    if (n < 2) {
        return 0
    } else {
        return redBeads
    }
}