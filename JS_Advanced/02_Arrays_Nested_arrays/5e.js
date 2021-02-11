function increase(arr) {
    let result =[arr[0]];
    
    for (let i=1; i<arr.length; i++){
        if (arr[i]>=result[result.length-1]) {
            result.push(arr[i]);
        }
    }
    return result;
   
}
console.log(increase([20,3,2,15,6,1]))