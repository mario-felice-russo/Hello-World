import { IPerson, PersonFactory, Adult, Child, Infant } from "./models/persons";
import { Grid } from "./models/grids";
import { Employee } from "./models/properties";

// let factory: PersonFactory = new PersonFactory();
// let p1: IPerson = factory.getPerson(new Date(2015, 0, 20));
// p1.printDetails();
// let p2: IPerson = factory.getPerson(new Date(2000, 0, 20));
// p2.printDetails();
// let p3: IPerson = factory.getPerson(new Date(1969, 0, 20));
// p3.printDetails();

let grid1: Grid = new Grid(1.0);  // 1x scale
let d1: number = grid1.calculateDistanceFromOrigin({x: 10, y: 10});
console.log(d1.toString());

let grid2: Grid = new Grid(5.0);  // 5x scale
let d2: number = grid2.calculateDistanceFromOrigin({x: 10, y: 10});
console.log(d2.toString());

let employee: Employee = new Employee("secret passcode");
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}