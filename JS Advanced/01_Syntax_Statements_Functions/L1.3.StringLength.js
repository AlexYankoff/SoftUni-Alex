function strLength(arg1, arg2, arg3) {
    let sumLength = arg1.length + arg2.length +arg3.length;
    let avgLength = Math.floor(sumLength/3);
    console.log(sumLength);
    console.log(avgLength);
}

strLength('chocolate', 'ice cream', 'cake')