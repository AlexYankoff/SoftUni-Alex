function equals(arr) {
    let counter = 0
    for (let row=0; row<arr.length; row++) {
        for(let col=0; col<arr[0].length;col++) {
            for (let x = 0; x<=1;x++) {
                for (let y =0; y<=1; y++){
                    if (arr[row+x] != undefined  && (Math.abs(x)+ Math.abs(y) == 1)) {
                        if (arr[row+x][col+y] == arr[row][col] ) {
                            counter+=1
                        }
                        
                    }
                }
            }
        }
    }
    return counter
}
console.log(equals([[2, 2, 5, 7, 4,],
                    [4, 0, 5, 3, 4,],
                    [2, 5, 5, 4, 2,]]))
