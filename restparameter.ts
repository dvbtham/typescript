let myColors = function (message: string, ...colors: string[]) {
    console.log(arguments.length);
    for (let i in colors) {
        console.log(message + " " + colors[i]);
    }
}
let mess = "Hello";
myColors(mess, "Blue", "Green", "White");
myColors(mess, "Blue", "Green", "White", "Black");
myColors(mess, "Blue", "Green", "White", "Red", "Yellow");