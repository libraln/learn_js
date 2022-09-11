function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item ) && (item <= b) 
    );
}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (відфільтровані значення)

alert( arr ); // 5,3,8,1 (не змінюється)

//
function filterRangeInPlace(arr, a, b) {
        for( let i = 0; i < arr.length; i++){ 
            if ( a < arr[i] || arr[i] > b) {  arr.splice(i, 1); } } 
        }
let arr1 = [5, 3, 8, 1];

filterRangeInPlace(arr1, 1, 4); // видаляє всі числа крім тих, що в діапазоні від 1 до 4

alert( arr1 ); // [3, 1]
