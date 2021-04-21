interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
}
// interfaces are creating a new type similar to number and string.

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name ${this.name} is date: ${this.year} and is broken? ${this.broken}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 50,
  summary(): string {
    return `my drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  // const { name, year, broken }: Vehicle = vehicle;
  // console.log(`Name: ${name}`);
  // console.log(`Year: ${year}`);
  // console.log(`Broken? ${broken}`);
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
