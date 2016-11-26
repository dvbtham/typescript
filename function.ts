function Add(x: number, y: number): number {
    return x + y;
}
let myAdd = function (x: number, y: number): number {
    return x + y;
}
console.log(Add(12, 8), myAdd(12, 12));

// arrow function
let calculateSalary = (bonus: number) => 6000000 + bonus;

console.log(calculateSalary(100000)); 