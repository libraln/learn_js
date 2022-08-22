function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Батьки дозволили?');
  }
}

function checkAge(age) {
  return (age > 18) || confirm('Батьки дозволили?')
}

function checkAge(age) {
 return (age > 18) ? true : confirm('Батьки дозволили?')
}

// //функція порівняння
function min( a, b ) {
  return a > b ? a : b
}

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

//функція pow()
function pow(x, n) {
  let res;
  for ( let i = 0 ; i < n; i++) {
    res *= x;
  }
  return res
}
let x = prompt('input x', 0);
let n = prompt('input n', 0);

if(n < 1) {
  alert('input num>1')
} else alert( pow(x,n) )