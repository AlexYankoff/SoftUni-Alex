function solve(arr) {
    let res = []
    let number = 1
    arr.forEach(element => action(element));
    function action(element) {
        if (element == "add") {
            res.push(number++);
        } else {
            res.pop();
            number++;
        }
    }
    
    if (res.length == 0) {
        console.log("Empty")
    } else {
        console.log(res.join("\n"));
    }

}

solve(['remove', 
'remove', 
'remove']
);
solve(['add', 'add', 'add', 'add']);
