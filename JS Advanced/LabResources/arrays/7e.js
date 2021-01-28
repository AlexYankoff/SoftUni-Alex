function solve(arr) {
    let res =[]
    arr.sort((a,b) => a - b);
    while (arr.length>0) {
        res.push(arr.shift());
        res.push(arr.pop());
    }
    return res;
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))