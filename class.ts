class Person {
    constructor(name) {
        this.name = name;
        console.log("Hello " + this.name + " This is contructor");
    }
    run() {
        console.log("Person is running ... ");
    }
    static talk() {
        console.log("static method...");
    }

    getId() {
        return 120;
    }
}
class Employee extends Person {
    constructor(name) {
        super(name);
        this.name = name;
        console.log("Hello " + this.name + " This is contructor");
    }
    getId() {
        return super.getId();
    }
}

let p = new Person("Tham");
let emp = new Employee("Tri");

console.log(emp.getId());
Person.talk();
console.log(p.getId());
//console.log(typeof Person +" "+ typeof p);
p.run();
console.log(p.run() == Person.prototype.run());