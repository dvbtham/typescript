let Colors = function (message: string, ...colors: string[]) {
    console.log(arguments.length);
    for (let i in colors) {
        console.log(message + " " + colors[i]);
    }
}
let message = "Hello";
let colorList = ["Blue", "Green", "White", "Red", "Yellow"];
Colors(message,...colorList);