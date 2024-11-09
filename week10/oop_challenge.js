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
  }
  
  // Create car objects
  const bmw = new Car("BMW", 120);
  const mercedes = new Car("Mercedes", 95);
  
  // Test the cars
  bmw.accelerate();
  bmw.accelerate();
  bmw.brake();
  
  mercedes.accelerate();
  mercedes.accelerate();
  mercedes.brake();
  mercedes.brake();