mySet = new Set()
mySet.add(1)
mySet.add(2)
mySet.add(2)
mySet.add(1)
mySet = Array.from(mySet)
console.log(mySet.join("-"))