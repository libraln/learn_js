function printNumbers(from, to) {
  let i = from;
  let intervalId = setInterval( function() {
    alert(i);
    if( i== to ) {
      clearInterval(intervalId);
    }
  i++ }, 1000);
}

printNumbers(1,10);

function printNums( from, to ) {
  let i = from;
  let timerId = setTimeout( function go() {
    alert(i);
    if( i < to ) {
      setTimeout( go, 1000 )
    }
    i++;
  }, 1000)
}
printNums(5,10);
