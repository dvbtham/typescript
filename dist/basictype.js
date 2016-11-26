var isDone = true;
var number = 120;
console.log(isDone);
var fullName = "Thâm David";
var age = 19;
var sentense = "My name is " + fullName + ", I'm " + (age + 1) + " years old.";
console.log(sentense);
//Array//
var myArray = [1, 2, 3, 4, 5, 6, 7];
console.log(myArray[3]);
var employee = ["Tham", "Thinh", "Tri"];
console.log("This guy so manly: " + employee[0] + ", 2 guys are gay: " + employee[1] + " - " + employee[2]);
//Tuple
var customer;
customer = [123, "Thâm David"];
console.log("Id: " + customer[0] + ", Customer name: " + customer[1]);
//enum
var animals;
(function (animals) {
    animals[animals["Dog"] = 0] = "Dog";
    animals[animals["Tiger"] = 1] = "Tiger";
    animals[animals["Cat"] = 2] = "Cat";
})(animals || (animals = {}));
;
var animal = animals.Cat;
console.log("I have these animals: " + animals[0] + " " + animals[1] + " " + animals[2]);
//any
var list = [1, true, "free"];
for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}
list[1] = 100;
list[2] = "Cars";
list[0] = 123;
console.log(list[1] + " " + list[2] + " " + list[0]);
var someValue = "this is a string";
var strLength = someValue.length;
var strLength2 = someValue.length;
console.log(strLength + " " + strLength2);
//# sourceMappingURL=basictype.js.map