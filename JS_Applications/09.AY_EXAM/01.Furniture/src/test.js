const myObj ={
    gender: 'а',
    age: Number()
}
console.log(Object.values(myObj))
const newArr = Object.values(myObj).some(x => !x)
console.log(newArr)