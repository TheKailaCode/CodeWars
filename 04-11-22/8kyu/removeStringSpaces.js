//Instructions

//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
    let text = x.split(' ')
    let newText = text.join('')
    return newText
}

 //use tthe split method *with a space* to split the string at the areas with spaces
 //use the join method to retain the original string but without spaces