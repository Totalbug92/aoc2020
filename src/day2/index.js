const { test, readInput } = require("../utils")

const prepareInput = (rawInput) => rawInput

const fixInput = (input) => {
  let r = input.split('\n');
  let b = [];
  r.map(element => {
    b.push({
      lower: element.substring(element.lastIndexOf('-'), 0).replace(/[^0-9]{1,2}/, ""),
      upper: element.substring(element.lastIndexOf('-'), element.lastIndexOf('-')+3).replace(/[^0-9]{1,2}/, ""),
      letter: element.charAt(element.lastIndexOf(':') - 1),
      string: element.substring(element.lastIndexOf(':') + 2).replace(/(\r\n|\n|\r)/gm, ""),
    })
  })
  return b;
}

let input = prepareInput(readInput());

input = fixInput(input);

const goA = (input) => {
  let numberCorrect = 0;
  input.forEach(element => {
    let letterCount = 0;
    [...element.string].forEach((e, index) => {
      if(e === element.letter)
      letterCount++
    })
    if(letterCount >= element.lower && letterCount <= element.upper)
      numberCorrect++;
  }) 
  return numberCorrect;
}

const goB = (input) => {
  let numberCorrect = 0;
  input.forEach(element => {
    let lower = element.string.charAt(element.lower - 1) === element.letter;
    let upper = element.string.charAt(element.upper - 1) === element.letter;
    if((lower || upper) && !(lower && upper)){
      numberCorrect++;}
  })
  return numberCorrect
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
