// let arr = [5, 2, 1, -10, 8];
// arr.sort((a,b) => b - a);
// // ... ваш код для сортування за спаданням

// alert( arr ); // 8, 5, 2, 1, -10

//
function copySorted(arr) {
    let newArr = [...arr];
    newArr.sort();
    return newArr;
}
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без змін)
