// oop_challenge2.js

class Car {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is now going at ${this.speed} km/h`);
    }
  
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is now going at ${this.speed} km/h`);
    }
  
    get speedUS() {
      return this.speed / 1.6;
    }
  
    set speedUS(speedUS) {
      this.speed = speedUS * 1.6;
    }
  }
  
  // Electric Car class, inheriting from Car
  class EV extends Car {
    constructor(make, speed, charge) {
      super(make, speed);
      this.charge = charge;
    }
  
    chargeBattery(chargeTo) {
      this.charge = chargeTo;
    }
  
    accelerate() {
      if (this.charge > 0) {
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
      } else {
        console.log("Battery is empty! Cannot accelerate.");
      }
    }
  }
  
  // Create car objects and test
  const ford = new Car("Ford", 120);
  const tesla = new EV("Tesla", 120, 23);
  
  ford.accelerate();
  ford.brake();
  console.log(`Ford's speed in mph: ${ford.speedUS}`);
  ford.speedUS = 60; // Sets speed to 96 km/h
  console.log(`Ford's speed in km/h: ${ford.speed}`);
  
  tesla.accelerate();
  tesla.brake();
  tesla.chargeBattery(90);
  tesla.accelerate();