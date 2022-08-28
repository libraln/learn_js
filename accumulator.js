function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt('input num', 0);
    }
}

let accumulator = new Accumulator(1); // початкове значення 1

accumulator.read(); // додає введене користувачем значення
accumulator.read(); // додає введене користувачем значення

alert(accumulator.value); // показує суму цих значень
