function solve (input) {
    let result = {}
    for (let curProd of input) {
        const [town, prodName, price] = curProd.split(' | ')
        const prod = [town, Number(price)]
        //check if prod is in result
        if(result[prodName] == undefined) {
            result[prodName] = prod
        } else {
            //check price
            if (result[prodName][1]>Number(price)) {
                result[prodName] = prod
            }
        }

       
    }
    for (const [key, value] of Object.entries(result)) {
        console.log(`${key} -> ${value[1]} (${value[0]})`)
   }
}
solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])
