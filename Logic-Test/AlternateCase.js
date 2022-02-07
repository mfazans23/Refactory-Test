// Alternate each case of each of string given

// alternateCase("abc")            => "ABC"
// alternateCase("ABC")            => "abc"
// alternateCase("Hello World")    => "hELLO wORLD"

function alternateCase(string) {
  let stringArray = string.split('')
  // let alternateStringArr = stringArr.map(char => char.toUpperCase)
  let convertedCaseArray = stringArray.map((char) => {
    //   if character is of the string is uppercase, then convert to lowercase
    if (char === char.charAt(0).toUpperCase()) {
      return char.charAt(0).toLowerCase()
    }
    // if characted of the string is lowercase, then convert to uppercase
    else if (char === char.charAt(0).toLowerCase()) {
      return char.charAt(0).toUpperCase()
    } else return char
  })

  return convertedCaseArray.join('')
}

console.log(alternateCase('hELlo world'))
