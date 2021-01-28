function composed(arr) {
    const res = {};
    for (let i=0; i<(arr.length-1);i+=2) {
        res[arr[i]]=Number(arr[i+1]);

    }
    return console.log(res);
}
composed(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])