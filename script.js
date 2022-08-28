let a = +prompt('input num 1', 0);
let b = +prompt('input num 2', 0);
let sum = a + b;
console.log(sum);

function readNumber() {
  let num;
  do {
    num = prompt('input num', 0);

  }while(!isFinite(num))
  if(num == null || num == ''){
    return null;
  }
  return +num;
}
console.log(readNumber());


