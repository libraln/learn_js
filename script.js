//вивести парні числа
for(let i = 2; i <= 10; i++) {
    if( i % 2 == 0){
        alert(i);
    } 
}
// //замінити for на while
for (let i = 0; i < 3; i++) {
    alert( `число ${i}!` );
  }

let i = 0;
while( i < 3 ) {
    alert( `число ${i}!` );
    i++;
}
//повторити цикл, поки не буде числа більше 100
let num = 0;
while( num < 100 || num ==='' || num === null){ 
    num = prompt('input number > 100', 0);
}

//вивести прості числа
let n = prompt('input num', 0);
label:
for(let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if(i % j == 0){
            continue label;
        } 
    }
    alert(i);
}

