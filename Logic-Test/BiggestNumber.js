// Description:
// Create a function that takes one positive three digit integer
// and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.

// Returm null if the argument is invalid.

// maxRedigit(123) --> 321
// maxRedigit(231) --> 321
// maxRedigit(321) --> 321

// maxRedigit(-1)  --> null
// maxRedigit(0)   --> null
// maxRedigit(99)  --> null
// maxRedigit(1000) --> null

function biggestNumber(num) {
  if (String(num).length === 3 && num > 0) {
    let numArr = String(num)
      .split('')
      .map((num) => Number(num))

    numArr.sort()
    numArr.reverse()
    return numArr.join('')
  } else {
    return null
  }
}
