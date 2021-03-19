async function print(){
    console.log(1)
    await console.log(5)
    console.log(7)
    const a ='baba'
    return a
}

const c = print()
console.log(c)


