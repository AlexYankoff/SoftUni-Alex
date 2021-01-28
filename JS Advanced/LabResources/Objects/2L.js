function citiCat(arr) {
    let towns = {};
    for (let el of arr) {
        [city, population] = el.split(' <-> ');
        if (towns[city] == undefined) {
            towns[city] = Number(population);
        } else {
            towns[city]+=Number(population);
        }
    }
    function print(towns){
        for (let key in towns) {
            console.log(`${key} : ${towns[key]}`);
        }
    }

    return print(towns);
}

citiCat(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)