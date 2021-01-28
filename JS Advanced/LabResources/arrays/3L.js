function sum(arr) { 
    last = Number(arr.pop());
    first = Number(arr.shift());
    return first+last;
}

console.log(sum(["20", "30", "40"]))