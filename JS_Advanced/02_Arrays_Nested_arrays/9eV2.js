function magic(arr) {
    
    let result;
    const newMatrix = []
    let isMagic = Boolean(1)
    for (let row=0; row<arr.length; row++) {
        newMatrix.push([])
        for (let col in arr[row]) {
            if (arr[col] != undefined) {
                newMatrix[row].push(arr[col][row]);
            }
        }
    }
    result = sum(arr, newMatrix);
    for (let i=0; i<(result.length-1);i++) {
        if (result[i] != result[i+1]) {
            isMagic = Boolean(0);
        
        }
    }
    function sum(arr, newMatrix) {
        let sum1;
        let sum2;
        let rowSums = []
        for (let row=0; row<arr.length; row++) {
            sum1 = arr[row].reduce((a,b) =>a+b );
            sum2 = newMatrix[row].reduce((a,b) =>a+b );
            rowSums.push(sum1);
            rowSums.push(sum2);
        }
        return rowSums;
    }
    return isMagic
    
}


console.log(magic([[4, 5, 7,8], [6, 5, ], [5, 5, 5]]));