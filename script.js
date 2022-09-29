function makeCounter() {
  let count = 0;
  function counter() {
    return count++;
  };

  counter.set = value => count = value;
  counter.decrease = () => count--;
  
  return counter;
}
let counter = makeCounter();
console.log(counter.set(18));
console.log(counter.decrease());