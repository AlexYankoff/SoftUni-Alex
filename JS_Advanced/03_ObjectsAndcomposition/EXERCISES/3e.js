function order (obj) {
    
    const  engins = [{'Small engine': { 'power': 90, 'volume': 1800 }}, {'Normal engine': { 'power': 120, 'volume': 2400 }}, {'Monster engine': { 'power': 200, 'volume': 3500 }}]

    let result = {}
  
    
    //select engin by by power - = or >=?
    for (const eng of engins) {
        const key = Object.keys(eng)[0]
        let curEngin = eng[key]

        if (curEngin.power>=obj.power) {
            result['model'] = obj.model
            result['engine'] = {'power':curEngin.power, 'volume':curEngin.volume}
            break;
            


        }
    }
    //add carriage type and color

    if (obj.carriage == 'hatchback') {
        result['carriage'] = {'type':'hatchback', 'color': obj.color}
    } else if (obj.carriage == 'coupe') {
        result['carriage'] = {'type':'coupe', 'color': obj.color}
    }
    if (obj.wheelsize%2 == 0) {
        obj.wheelsize --
    }
    result['wheels'] =[obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize]

    return result
}





console.log(order({ model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14 }))

  console.log(order({ model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17 }
))

