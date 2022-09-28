function sum(a) {
  return function(b) {
    let sum = a+b;
    return sum;
  }
}
console.log(sum(2)(3));

//task 2

let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a, b) {
  return function(el) {
    return el >= a && b >= el 
  }
}

function inArray(arr) {
  return function(el) {
    return arr.includes(el);
  }
}
console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2
console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

