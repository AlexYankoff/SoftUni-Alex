function sort(arr) {
    arr.sort((a,b) => {
        if (a.length == b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length
    })
    return arr.join("\n")
}

console.log(sort(["baba", "alex", "d"]))