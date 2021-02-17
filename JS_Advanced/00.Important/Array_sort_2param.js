function sort(arr) {
    arr.sort((a,b) => {
        if (a.length == b.length) {
            return a.localeCompare(b); //alphabetical sort
        }
        return a.length - b.length // sort by length of element
    })
    return arr.join("\n")
}

console.log(sort(["baba", "alex", "d"]))