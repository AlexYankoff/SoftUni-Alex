
function solve(arr) {
    let m;
    let max = -1000;
    let row;
    for (i= 0; i<arr.length;i++) {
        row = arr[i]
        m = Math.max(...row)
        if (max<m) {
           max = m;
        }
   }
return max
}



console.log(solve([[-1,-10,-20], [2,3]]))