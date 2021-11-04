import  Car  from './Car.js';
import  Truck  from './Truck.js';
import  Vehicle  from './Vehicle.js';

// 1.Replicate code from slide 11, create instances of car and truck. Try to call different methods for both, investigate output using console.log().
const honda = new Car('H20', 2000, 300)
console.log(honda.type);
honda.transportPeople()

// 1.Replicate code from slide 11, create instances of car and truck. Try to call different methods for both, investigate output using console.log().
const fireTruck = new Truck('F50', 1990, 40)
console.log(fireTruck.type);
fireTruck.transportContainer()
console.log(fireTruck.maxTruckSpeed());

// 3.Call method of father’s class.
honda.displayInfo()

// 2.Add static method to one class, try to call it and investigate output.
console.log(Car.carDescription());