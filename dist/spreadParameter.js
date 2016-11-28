var Colors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(arguments.length);
    for (var i in colors) {
        console.log(message + " " + colors[i]);
    }
};
var message = "Hello";
var colorList = ["Blue", "Green", "White", "Red", "Yellow"];
Colors.apply(void 0, [message].concat(colorList));
//# sourceMappingURL=spreadParameter.js.map