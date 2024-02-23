"use strict";
class Car {
    static getNumberOfCars() {
        return Car.numberOfClass;
    }
    // Constructor
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfClass++;
        // if((doors % 2) === 0) {
        //   this._doors = doors;
        // } else {
        //   console.log('Doors must be an even number');
        // }
    }
    // Accessors
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            console.log('Doors must be an even number');
        }
    }
    // Methods
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} KM.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    worker() {
        return this._make;
    }
}
// Properties
Car.numberOfClass = 0;
let myCar = new Car('mazda', 'red', 4);
console.log(myCar.color);
//console.log(myCar._color);
let myCar2 = new Car('Galaxy Motors', 'red', 3);
//console.log(myCar2._doors)
console.log(myCar2.doors);
console.log(myCar.accelerate(35));
console.log(myCar.brake());
console.log(myCar.turn('right'));
console.log(Car.getNumberOfCars());
class ElectricCar extends Car {
    // Constructor
    constructor(make, color, range, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }
    // Accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    // Methods
    charge() {
        console.log(this.worker() + " is charging.");
    }
    brake() {
        return `${this.worker()}  is braking with the regenerative braking system.`;
    }
}
let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
console.log(spark.brake());
