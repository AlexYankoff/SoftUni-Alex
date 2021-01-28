function city1(name, population, treasury) {
    const city = {};
    city.name = name;
    city.population = population;
    city.treasury = treasury
    return city;

}
console.log(city1('Devin', 1000, 333))

function city2(name, population, treasury) {
    return {
        name,
        population,
        treasury
    }
}
console.log(city2("Sofia",))