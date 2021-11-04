import  Vehicle  from './Vehicle.js';

class Truck extends Vehicle{
    constructor(carModel, carYear, maxSpeed){
        super(carModel, carYear, maxSpeed);
        this.type = 'truck';
    }

    transportContainer(){
        console.log(`I am starting transporting heavy container`);
    }

// Create new method
    maxTruckSpeed(){
        return `Maximum truck speed is 55 mph and your truck maximum speed is ${this.maxSpeed} so your truck lacks ${55 - this.maxSpeed} mph`
    }
}

export default Truck;