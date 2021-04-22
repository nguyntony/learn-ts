class Vehicle {
  // public drive(): void {
  //   console.log('vroom vroom');
  // }

  // color: string = 'red'; // this is one way to initialize a field
  // color: string;

  // constructor(color: string) {
  //   // using a constructor fn you are able to accept arguments that are given when you create an instance of the class. when you are creating a class and you want to initialize a field then you can either do it this way inside of a constructor fn or you can do it like so, above.
  //   this.color = color;
  // }

  // instead of initializing the variable then later using it inside of the constructor fn you can use a shorthand like this.

  constructor(public color: string) {}

  protected honk(): void {
    console.log('MOVE *BEEP*');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  private drive(): void {
    console.log('car is driving');
  }
  // private methods that you can only call this method INSIDE of /this/ class; if you overwrite a method but also overwrite its modifier such as a public method to a private method it will cause an error.

  // inheritance fields - right now the vehicle class which is the parent class has a constructor fn that accepts a string. that means any car instances will also run that parent constructor fn and require a string to be passed. what happens if we define a constructor fn in car?

  constructor(public wheels: number, color: string) {
    // child constructor fn require a super call bc it needs to reference the parent constructor fn, note that you need to pass an arg to super bc the parent class is expecting it, you can hard code the value or you can receive an arg and to do that you need to add another param to this child's constructor fn, note that you do not want to include a modifier bc if you do it will create another inititialization of that prop and you don't need that bc the prop belongs to the parent class.
    super(color);
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'blue');
car.startDrivingProcess();
