const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50
    };

    const newParam = "status"
    person.newParam = 'merried'

    console.log(person)

    //GET VALUES IN ARRAY
    const objValues = Object.values(person)
    console.log(` object values in arraty => ${objValues}`)

    //GET KEYS IN ARRAY
    const objKeys = Object.keys(person)
    console.log(` object keys in array =>  ${objKeys}`)

    //GET ENTRIES
    const objEntries = Object.entries(person)
    console.log(` object entries in araty =>  ${objEntries}`)

    const key = 'Sport'
    const val = "ski"

    testObj = {key,val}
    console.log(testObj)


    
        





    
        


