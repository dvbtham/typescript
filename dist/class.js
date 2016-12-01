var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name) {
        this.name = name;
        console.log("Hello " + this.name + " This is contructor");
    }
    Person.prototype.run = function () {
        console.log("Person is running ... ");
    };
    Person.talk = function () {
        console.log("static method...");
    };
    Person.prototype.getId = function () {
        return 120;
    };
    return Person;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        _super.call(this, name);
        this.name = name;
        console.log("Hello " + this.name + " This is contructor");
    }
    Employee.prototype.getId = function () {
        return _super.prototype.getId.call(this);
    };
    return Employee;
}(Person));
var p = new Person("Tham");
var emp = new Employee("Tri");
console.log(emp.getId());
Person.talk();
console.log(p.getId());
//console.log(typeof Person +" "+ typeof p);
p.run();
console.log(p.run() == Person.prototype.run());
//# sourceMappingURL=class.js.map