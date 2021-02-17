function solve (arr) {
    let allCars = arr
    .map((line) => line.split(' | '))
    .reduce((storage, cars) => {
        let [brand, model, qty]= cars; 
        if (!storage[brand]) {
            storage[brand] = {}; 
        }
        if (!storage[brand][model]) {
            storage[brand][model] =0
        }
        storage[brand][model] +=Number(qty);
        return storage;
    }, {})

        let result=""
        for (const brand of Object.entries(allCars)) {
            result +=`${brand[0]}\n`;
            for (const model of Object.entries(brand[1])) {
                result +=`###${model[0]} -> ${model[1]}\n`
            }
        }
    
    return result
}


console.log(solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
))



//const reducer = (accumulator, currentValue) => accumulator + currentValue;