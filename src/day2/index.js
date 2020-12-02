const { test, readInput } = require("../utils")

const prepareInput = (rawInput) => rawInput

const fixInput = (input) => {
  let r = input.split('\n');
  let b = [];
  r.map(e => {
    b.push({
      l: e.substring(e.lastIndexOf('-'), 0).replace(/[^0-9]{1,2}/, ""),
      u: e.substring(e.lastIndexOf('-'), e.lastIndexOf('-')+3).replace(/[^0-9]{1,2}/, ""),
      c: e.charAt(e.lastIndexOf(':') - 1),
      s: e.substring(e.lastIndexOf(':') + 2).replace(/(\r\n|\n|\r)/gm, ""),
    })
  })
  return b;
}

let input = prepareInput(readInput());

input = fixInput(input);

const goA = (i) => {
  let n = 0;
  i.forEach(s => {
    let c = 0;
    [...s.s].forEach(e => {
      if(e === s.c)
        c++
    })
    if(c >= s.l && c <= s.u)
      n++;
  }) 
  return n;
}

const goB = (i) => {
  let n = 0;
  i.forEach(s => {
    let l = s.s.charAt(s.l - 1) === s.c;
    let u = s.s.charAt(s.u - 1) === s.c;
    if((l || u) && !(l && u))
      n++;
  })
  return n
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
