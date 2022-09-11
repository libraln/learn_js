function Calculator() {
    this.methods = {
        '+': (a,b) => a+b,
        '-': (a,b) => a-b,
    }
    this.calculate = function(str) {
        let arr = str.split(' '),
        a = +arr[0];
        operator = arr[1];
        b = +arr[2];
        return this.methods[operator](a,b);
    }
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}
let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8