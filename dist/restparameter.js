var myColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(arguments.length);
    for (var i in colors) {
        console.log(message + " " + colors[i]);
    }
};
var mess = "Hello";
myColors(mess, "Blue", "Green", "White");
myColors(mess, "Blue", "Green", "White", "Black");
myColors(mess, "Blue", "Green", "White", "Red", "Yellow");
//# sourceMappingURL=restparameter.js.map