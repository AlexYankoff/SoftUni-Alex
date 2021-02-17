
const [a, ...rest ] = [1, 2, 3]
console.log(a, rest) //result  1 [ 2, 3 ]
console.log(a, ...rest) //result 1 2 3 

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(...numbers)

console.log(sum(...numbers));

console.log(Math.max(...numbers))
// expected output: 6

//console.log(sum.apply(null, numbers));
// expected output: 6