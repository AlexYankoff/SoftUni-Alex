function towns (input) {
    result = []
    input.shift()
    for (line of input) {
        [town, latitude, longitude] = line.slice(2,-2).split(' | ');
        result.push({'Town':town, 'Latitude':Number(Number(latitude).toFixed(2)), 'Longitude':Number(Number(longitude).toFixed(2))})
    }
    return JSON.stringify(result)
}

console.log(towns(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
))

console.log(towns(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
))
