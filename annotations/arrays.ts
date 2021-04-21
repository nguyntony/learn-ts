const carMakers = ['ford', 'toyota', 'chevy'];
// using type inference to understand that carMakers is string[], we could be explicit and add the string[] but we're using type inference to help us here. however, we do have to use type annotations when we are declaring an empty array
const carMakers2 = []; // such as this example, ts does not have enough info to know what array type, we want to avoid the any type as much as possible

const dates = [new Date(), new Date(), new Date()];

const carsByMake = [['f150'], ['corola'], ['camaro']]; // for a 2d array we will see the type like this: string[][], you will specify the type of the inner array

// help with inference when extracting values
const car = carMakers[0]; // TS knows that car is a string type
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(100); error prompt!

// help with builtin fn such as 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: (string | Date)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
