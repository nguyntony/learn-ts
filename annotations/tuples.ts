const drinkObject: { color: string; carbonated: boolean; sugar: number } = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};
// turn the object above into a tuple
const drinkTuple: [string, boolean, number] = ['brown', true, 40]; // this array is a representation of one record in this case a drink, & the order of the data matters bc each index will indicate what the value means. you are able to assign the type to this tuple to ensure the order

type Drink = [string, boolean, number]; // this is creating a new type and in this instance a version of a tuple and we can use this elswhere in our code.
const pepsi: Drink = ['brown', false, 1999];
const tea: Drink = ['light brown', false, 0];
