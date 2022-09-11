let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// function getAverageAge(arr) {
//     let ageSum = 0; 
//     for( let i = 0; i < arr.length; i++) {
//         ageSum += arr[i].age;
//     }
//     let averageAge = ageSum / arr.length;
//     return averageAge;
// }

function getAverageAge( users) {
    return arr.reduce( (acc, user) => acc + user.age, 0 )/users.length;
}
