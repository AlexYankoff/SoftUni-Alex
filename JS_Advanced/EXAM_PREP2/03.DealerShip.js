let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}






let {assert} = require('chai')

describe("Tests dealership", function() {
    describe("newCarCost", function() {

        it("when old car", function() {
            assert.equal(dealership.newCarCost('Audi A4 B8',1000),-14000)
        });
        it("when old car", function() {
            assert.equal(dealership.newCarCost('Audi A4 B8',120000),105000)
        });
        it("when old car", function() {
            assert.equal(dealership.newCarCost('',120000),120000)
        });
    });
    describe("carEquipment", function() {

        it("No extras", function() {
            assert.equal((dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'],[])).toString(),[])
        });
        it("random extras", function() {
            assert.equal((dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'],[0,2,3])).toString(),'heated seats,sport rims,navigation')
        });
        it("full extras", function() {
            assert.equal((dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'],[0,1,2,3,4])).toString(),'heated seats,sliding roof,sport rims,navigation,')
        });
    });
    describe("euroCategory", function() {

        it("category", function() {
            assert.equal(dealership.euroCategory(5),`We have added 5% discount to the final price: 14250.`)
        });
        it("nocategory", function() {
            assert.equal(dealership.euroCategory(3),'Your euro category is low, so there is no discount from the final price!')
        });
        it("category", function() {
            assert.equal(dealership.euroCategory(4),`We have added 5% discount to the final price: 14250.`)
        });

    });

});
