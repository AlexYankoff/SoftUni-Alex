function solve(arr, first, last) {
    return arr.slice(arr.indexOf(first), (arr.indexOf(last)+1));
}
console.log(solve(["moni", "doni","fredi", "tiger", "pp"], "doni", "tiger"))