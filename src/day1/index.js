const { test, readInput } = require("../utils")

const prepareInput = (rawInput) => rawInput

let input = prepareInput(readInput())

input = input.split('\n');

input = input.map(element => {
  return parseInt(element)
})
input.sort((a,b) => {
  return a - b;
})

const goA = (input) => {
  

  function getAnswer (left, right) {
    if ((input[left] + input[right]) === 2020) {
      return input[left] * input[right]
    }
    else if((input[left] + input[right]) < 2020) {
      return getAnswer(++left, right);
    }
    else if((input[left] + input[right]) > 2020) {
      return getAnswer(left, --right);
    }
    
  }

  return getAnswer(0, input.length - 1)
}

const goB = (input) => {
  

  let answer = null;
  function getAnswer (left, right, e) {
    if ((input[left] + input[right] + e) === 2020) {
      answer = input[left] * input[right] * e
      return true
    }
    else if((input[left] + input[right] + e) < 2020) {
      return getAnswer(++left, right, e);
    }
    else if((input[left] + input[right] + e) > 2020) {
      return getAnswer(left, --right, e);
    }
    
  }
  input.some(element => {
    return getAnswer(0, input.length - 1, element)
    
  });

  return answer
}

/* Tests */

// test(result, expected)

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
