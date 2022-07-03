// Instructions

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

function warnTheSheep(queue) {

    for (let i = queue.length; i >= 0; i--) {

        if (queue[queue.length - 1] == 'wolf') {
            return "Pls go away and stop eating my sheep"
        } else if (queue[i] == 'sheep' && queue[i - 1] == 'wolf') {
            return `Oi! Sheep number ${queue.length - i}! You are about to be eaten by a wolf!`
        }

    }

}