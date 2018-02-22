"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PersonCategory;
(function (PersonCategory) {
    PersonCategory[PersonCategory["Infant"] = 0] = "Infant";
    PersonCategory[PersonCategory["Child"] = 1] = "Child";
    PersonCategory[PersonCategory["Adult"] = 2] = "Adult";
})(PersonCategory = exports.PersonCategory || (exports.PersonCategory = {}));
var Person = /** @class */ (function () {
    function Person(dateOfBirth) {
        this.DateOfBirth = dateOfBirth;
    }
    Person.prototype.printDetails = function () {
        console.log("Person: ");
        console.log("Date of Birth  : " + this.DateOfBirth.toDateString());
        console.log("Category       : " + PersonCategory[this.Category]);
        console.log("Can sign       : " + this.canSignContracts());
    };
    return Person;
}());
exports.Person = Person;
var Infant = /** @class */ (function (_super) {
    __extends(Infant, _super);
    function Infant(dateOfBirth) {
        var _this = _super.call(this, dateOfBirth) || this;
        _this.Category = PersonCategory.Infant;
        return _this;
    }
    Infant.prototype.canSignContracts = function () { return false; };
    return Infant;
}(Person));
exports.Infant = Infant;
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(dateOfBirth) {
        var _this = _super.call(this, dateOfBirth) || this;
        _this.Category = PersonCategory.Child;
        return _this;
    }
    Child.prototype.canSignContracts = function () { return false; };
    return Child;
}(Person));
exports.Child = Child;
var Adult = /** @class */ (function (_super) {
    __extends(Adult, _super);
    function Adult(dateOfBirth) {
        var _this = _super.call(this, dateOfBirth) || this;
        _this.Category = PersonCategory.Adult;
        return _this;
    }
    Adult.prototype.canSignContracts = function () { return true; };
    return Adult;
}(Person));
exports.Adult = Adult;
var PersonFactory = /** @class */ (function () {
    function PersonFactory() {
    }
    PersonFactory.prototype.getPerson = function (dateOfBirth) {
        var dateNow = new Date(); // defaults to now.
        var currentMonth = dateNow.getMonth() + 1;
        var currentDate = dateNow.getDate();
        var dateTwoYearsAgo = new Date(dateNow.getFullYear() - 2, currentMonth, currentDate);
        var date18YearsAgo = new Date(dateNow.getFullYear() - 18, currentMonth, currentDate);
        if (dateOfBirth >= dateTwoYearsAgo) {
            return new Infant(dateOfBirth);
        }
        if (dateOfBirth >= date18YearsAgo) {
            return new Child(dateOfBirth);
        }
        return new Adult(dateOfBirth);
    };
    return PersonFactory;
}());
exports.PersonFactory = PersonFactory;
//# sourceMappingURL=persons.js.map