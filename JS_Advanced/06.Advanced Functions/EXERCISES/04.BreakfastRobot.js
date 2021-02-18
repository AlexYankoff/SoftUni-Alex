function solution() {
    let ingredients = {'protein': 0, 'carbohydrate': 0, 'fat': 0, 'flavour': 0};
    let products = {
        'apple': {'carbohydrate': 1, 'flavour': 2},
        'lemonade': {'carbohydrate': 10, 'flavour': 20},
        'burger': {'carbohydrate': 5, 'fat': 7, 'flavour': 3},
        'eggs': {'protein': 5, 'fat': 1, 'flavour': 1},
        'turkey': {'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10},
    };

    return function doSomething(action) {
        let canBeMade = true;
        action = action.split(' ');
        if (action[0] === 'restock') {
            ingredients[action[1]] += Number(action[2]);
            return 'Success';
        } else if (action[0] === 'prepare') {
            let meal = action[1];
            let qty = Number(action[2]);
            let needed = products[meal];
            for (let ingredient of Object.keys(needed)) {
                if (!needed[ingredient] * qty >= ingredients[ingredient]) {
                    canBeMade = false;
                    return (`Error: not enough ${ingredient} in stock`);

                }
            }
            if (canBeMade) {
                for (let ingredient of Object.keys(needed)) {
                    ingredients[ingredient] -= needed[ingredient] * qty;
                }
                return 'Success';
            }
        } else {
            return `protein=${ingredients['protein']} carbohydrate=${ingredients['carbohydrate']} fat=${ingredients['fat']} flavour=${ingredients['flavour']}`;
        }

    };
}

const manager = solution();

// manager('restock carbohydrate 10');
// manager('restock flavour 10');
// manager('prepare apple 1');
// manager('restock fat 10');
// manager('prepare burger 1');
// manager('report');

manager('prepare turkey 1');
manager('restock protein 10');
manager('prepare turkey 1');
manager('restock carbohydrate 10');
manager('prepare turkey 1');
manager('restock fat 10');
manager('prepare turkey 1');
manager('restock flavour 10');
manager('prepare turkey 1');
manager('report');


