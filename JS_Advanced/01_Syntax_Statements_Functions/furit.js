function moneyNeeded(fruit, weight, price) {
    weight = (weight/1000);
    money = (weight*price).toFixed(2);
    console.log(`I need $${money} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}
moneyNeeded('orange', 2500, 1.80)
moneyNeeded('apple', 1563, 2.35)

