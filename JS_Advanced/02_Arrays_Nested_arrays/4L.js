function solve(arr) {
    let res = []
    for (let el of arr) {
        el<0 ? res.unshift(el): res.push(el);
    }
console.log(res.join("\n"));
}
solve([7, -2, 8, 9])