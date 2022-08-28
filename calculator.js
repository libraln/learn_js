let calculator = {
    read() {
        this.a = +prompt('input first value', 0);
        this.b = +prompt('input second value', 0);
    },
    sum() {
        let res = this.a + this.b;
        return res;
    },
    mul() {
        let res = this.a * this.b;
        return res;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );