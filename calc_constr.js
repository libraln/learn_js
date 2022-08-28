let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

function Calculator() {
    this.read = function () {
        this.a = +prompt('input first num', 0);
        this.b = +prompt('input secon num', 0);
    }
    this.sum = function() {
        this.res = this.a + this.b;
        return this.res;
    }
    this.mul = function() {
        this.res = this.a * this.b;
        return this.res;

    }
}