const { expect, assert} = require('chai'); // за да работи expect от chai
const {asser} = require('chai') // ako ползваме require ot chai

let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}


describe ('TODO', () => { //mocha

    

    it('Make an order', () => {

        let pizza = {orderedPizza: 'Pizza', orderedDrink: 'drink'};
        let pizza1 =  {orderedDrink: 'drink'};
        let pizza2 = {orderedPizza: 'Pizza'}
        let pizza3 = {}
        
        assert.throw(() => pizzUni.makeAnOrder(pizza1), 'You must order at least 1 Pizza to finish the order.')
        assert.throw(() => pizzUni.makeAnOrder(pizza3), 'You must order at least 1 Pizza to finish the order.')

        assert.equal(pizzUni.makeAnOrder(pizza2), `You just ordered ${pizza2.orderedPizza}`);
        assert.equal(pizzUni.makeAnOrder(pizza), `You just ordered ${pizza.orderedPizza} and ${pizza.orderedDrink}.`)
        
        
        });
    
    it('getRemainigWork', () => {

        let pizzaNames = [{pizzaName: 'Margarita', status: 'ready'}, {pizzaName: 'Peperoni', status: 'ready' }, {pizzaName: 'Salami', status: 'ready'}]
        let pizzaNames1 = [{pizzaName: 'Margarita', status: 'ready'}, {pizzaName: 'Peperoni', status: 'preparing' }, {pizzaName: 'Salami', status: 'preparing'}]

        assert.equal(pizzUni.getRemainingWork(pizzaNames), 'All orders are complete!')
        assert.equal(pizzUni.getRemainingWork(pizzaNames1), `The following pizzas are still preparing: Peperoni, Salami.`)

    })
    it('order Type', () => {

        assert.equal(pizzUni.orderType(100, 'Carry Out'), 90)
        assert.equal(pizzUni.orderType(100, 'Delivery'), 100)
    })
    })


