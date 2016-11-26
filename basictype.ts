let isDone: boolean = true;
let number = 120;
console.log(isDone);

let fullName: string = "Thâm David";
let age: number = 19;
let sentense: string = `My name is ${fullName}, I'm ${age + 1} years old.`;

console.log(sentense);
//Array//
let myArray: number[] = [1, 2, 3, 4, 5, 6, 7];

console.log(myArray[3]);

let employee: Array<string> = ["Tham", "Thinh", "Tri"];

console.log(`This guy so manly: ${employee[0]}, 2 guys are gay: ${employee[1]} - ${employee[2]}`);

//Tuple

let customer: [number, string];
customer = [123, "Thâm David"];

console.log(`Id: ${customer[0]}, Customer name: ${customer[1]}`);

//enum

enum animals { Dog, Tiger, Cat };
let animal: animals = animals.Cat

console.log(`I have these animals: ${animals[0]} ${animals[1]} ${animals[2]}`);

//any


let list: any[] = [1, true, "free"];
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}
list[1] = 100;
list[2] = "Cars";
list[0] = 123;
console.log(`${list[1]} ${list[2]} ${list[0]}`);

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

let strLength2: number = (someValue as string).length;

console.log(`${strLength} ${strLength2}`);