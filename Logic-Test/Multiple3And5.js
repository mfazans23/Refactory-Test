// Create solution function that accept 1 parameter that be
// will multiple number 3 and 5 while each result of that multiplication is still lower than parameter inputed

// solution (10) // => 23 = 3 + 5 + 6 + 9
// solution (20) // => 78 = 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18

function solution(num) {
  // Calculate the sum of 3 multiplied number
  let sumOf3 = sumOf(3, 3, num)
  // Calculate the sum of 5 multiplied number
  let sumOf5 = sumOf(5, 5, num)
  // Calculate the sum of 15 multiplied number
  let sumOf15 = sumOf(15, 15, num)

  //   Both sum of 3 and 5 resulted the same multiplied 15 value
  //   So, we need to substracted one of them
  return sumOf3 + sumOf5 - sumOf15
}

function sumOf(currValue, adder, maxValue) {
  if (currValue >= maxValue) {
    return 0
  }
  return currValue + sumOf(currValue + adder, adder, maxValue)
}

console.log(solution(20))
