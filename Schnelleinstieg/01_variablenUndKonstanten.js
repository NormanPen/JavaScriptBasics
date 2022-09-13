let string = "String";
console.log(string);

let string2 = "Zusammengestzter";
let concat = string + string2;
console.log(concat);

let concat2 = `Zusammengesetzter ${string}`;
console.log(concat2);

let number1 = 23;
let number2 = 42;
let sum = number1 + number2;
console.log(sum);

const float = 3.141;
// float = 3; Eine Konstante kann nicht ueberschrieben werden!
const sum2 = number1 + float;
console.log(sum2); // 26.141. In js kann man Fliesskomma direkt mit Integern verrechnen.

