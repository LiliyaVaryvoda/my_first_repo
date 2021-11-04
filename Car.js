import  Vehicle  from './Vehicle.js';

class Car extends Vehicle{
    constructor(carModel, carYear, maxSpeed){
        super(carModel, carYear, maxSpeed);
        this.type = 'car';
    }

    transportPeople(){
        console.log(`I am starting transporting passengers`);
    }

// 4.Override method of father’s class.
    displayInfo(){
        let currentDate = new Date().getFullYear();
        console.log(`First 🚗 was invented ${currentDate - 1886} years ago.`);
    }

// 2.Add static method to one class, try to call it and investigate output.
    static carDescription(){
        return 'Truck is a vehicle designed to transport cargo.'
    }
}

export default Car;