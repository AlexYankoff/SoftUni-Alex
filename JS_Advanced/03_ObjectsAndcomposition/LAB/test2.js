const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
let func = x => x*2;
let a = func

console.log(a(5))

func = x => x*3

console.log(a(5))

const arr = [1,2,110]

const b = Object.assign (arr)

console.log(b)

arr = [1,1,1];

console.log(b)

