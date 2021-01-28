function solve(n, k) {
    let result = [1]
    for (let i=1; i<n; i++) {
        result.push(sum(result,k))
        
    }
return result
}
function sum(arr, k) {
    seq = arr.slice(-k);
    return seq.reduce((acc, el) =>acc+el);
}
console.log(solve(8,2))