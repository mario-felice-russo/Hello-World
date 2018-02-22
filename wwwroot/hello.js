"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grids_1 = require("./models/grids");
var properties_1 = require("./models/properties");
// let factory: PersonFactory = new PersonFactory();
// let p1: IPerson = factory.getPerson(new Date(2015, 0, 20));
// p1.printDetails();
// let p2: IPerson = factory.getPerson(new Date(2000, 0, 20));
// p2.printDetails();
// let p3: IPerson = factory.getPerson(new Date(1969, 0, 20));
// p3.printDetails();
var grid1 = new grids_1.Grid(1.0); // 1x scale
var d1 = grid1.calculateDistanceFromOrigin({ x: 10, y: 10 });
console.log(d1.toString());
var grid2 = new grids_1.Grid(5.0); // 5x scale
var d2 = grid2.calculateDistanceFromOrigin({ x: 10, y: 10 });
console.log(d2.toString());
var employee = new properties_1.Employee("secret passcode");
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
//# sourceMappingURL=hello.js.map