function largestNumber(a, b, c) {
    let max;
    if(a>b && a>c){
        max = a;
    }
    else if (b>a && b>c) {
        max = b;
    }
    else if (c>a && c>b) {
        max = c;
    }
    console.log(`The largest number is ${max}.`)
}

largestNumber(1,2,-3);