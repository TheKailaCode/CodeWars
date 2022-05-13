// Instructions

/* Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places.*/

function usdcny(usd) {
    let cny = usd * 6.75
    let total = cny.toFixed(2)
    return `${total} Chinese Yuan`
}

  // convert usd --> cny = usd * 6.75 
  // get to 2 decimal places use .toFixed(2) method