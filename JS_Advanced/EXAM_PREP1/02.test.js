
class Parking {


    constructor(capacity) {
        this.capacity = capacity
        this.vehicles = {}
    }
    addCar( carModel, carNumber ) {
        if (this.capacity == 0) {
            throw new Error ('Not enough parking space.');
        }
        this.vehicles[carNumber] =[carModel,{'payed': false} ];
        console.log(this.vehicles)
        
        
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
        };
    removeCar(carNumber) {
        if (!(carNumber in this.vehicles) ) {
            return 'няма кола';
        };
        delete this.vehicles[carNumber]
        return 'iztrit';
        
    }

    pay( carNumber ) {};

    getStatistics(carNumber) {};


}

const car1 = new Parking(10)
console.log(car1.addCar("Volvo t600", "TX3691CA"))

console.log(car1.removeCar("TX3691CA"))
console.log(car1.removeCar("TX3691CA"))


