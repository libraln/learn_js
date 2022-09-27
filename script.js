function sumTo(num) {
  if(num == 1) {
    return 1;
  } else {
    return num + sumTo(num - 1);
  }
}

let res = sumTo(100);
console.log(res);

function factorial(n) {
  if(n==1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

function fib(n) {
  if( n <= 1 ) {
    return n;
  } else {
   return fib(n-1) + fib(n-2)
  }
}


alert(fib(3)); // 2
alert(fib(7)); // 13
