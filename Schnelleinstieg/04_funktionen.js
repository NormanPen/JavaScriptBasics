// Funktionen

// Funktionen aufrufen
// Funktion_name(Argument1, Argument2, ... Argument5, ...)
console.log("Das ist ein Funktionesaufruf mit einem String als Argument")

// Eigene Funktion definieren

function add(value1, value2) {
    return value1 + value2;
}

let result = add(23, 42);
console.log(result);

// Funktion ohne return
function greet(name) {
    console.log(name);
}
greet("Norman");

// Funktion mit Bedingung

function minOfThree(x, y, z) {
    if (x < y) {
        if ( x < z) {
            return x;
        } else {
            return y;
        }
    } else {
        return z;
    }
}
console.log(minOfThree(1, 2, 3));
console.log(minOfThree(11, 5, 3));
console.log(minOfThree(16, 22, 3));

// Funktionen koennen vor der Erstellung aufgerufen werden

console.log("Vor der Erstellung: " +substract(5, 4));
function substract(number1, number2) {
    return number1 - number2;
}
console.log("Nach der Erstellung: " + substract(10, 3));

// Function Expressions

const getRectArea = function (width, height) {
    return width * height;
}
console.log(getRectArea(3, 4));

// Arrow Functions
const printRectArea = (width, height) => {
    console.log( width * height );
}
printRectArea(5,5);
// Function Expressions muessen nach der Erstellung aufgerufen werden!!!~§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§  §§§§§§§§    §§§§§§§§§§§§§q§`````````````````````````````````````````````````````````` ```§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§    1§§§    §   1§§ §   §```````§   1   1   §§§§§§      §§  §§          §§  §§  §1  1       §   q   `````````````~A§§11§§§
