function Add(x: number, y: number): number {
    return x + y;
}
let myAdd = function (x: number, y: number): number {
    return x + y;
}
console.log(Add(12, 8), myAdd(12, 12));