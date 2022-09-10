let arr = ["t", "e", "s", "t"];
console.log(arr.indexOf('f'));
console.log(arr.lastIndexOf('t'));
let res = arr.slice(0,1);
console.log(arr);
console.log(res);
let a = 4;
let brr = [4, 2, 3, 8, 9, 15, 1, 22];
let resConcat = arr.concat(a, brr);
console.log(resConcat);
console.log(arr);
let index = arr.includes("e", 3);
console.log(index);
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
let user = users.findIndex(function(item) {
    item.id == 1;
    return item
})
console.log(user);
let filteredUsers = users.filter(item => item.id < 3);
console.log(filteredUsers);
arr.forEach(el => console.log(el));
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths);
brr.sort( function (a,b) {
    return a - b;
})
console.log(brr);
let countries = ['Österreich', 'Andorra', 'Vietnam'];
countries.sort( (a, b) => {
    a.localeCompare(b)
})
console.log(countries);
console.log(countries.sort( (a, b) => {
    return a.localeCompare(b) 
}));
let reversedArray = brr.reverse();
console.log(brr);

let names = 'Вася, Петя, Маша';
let namesArr = names.split(', ');
console.log(namesArr);

let copyArr = [...arr];
console.log(copyArr);
let nArr = arr;
console.log(nArr);

// filter
function filterSimple() {
    let filteredUsersArray = [];
    for(let i=0; i<users.length; i++) {
        console.log(users[i]);
        if(users[i].id < 3) {
            filteredUsersArray.push(users[i]);
        }
    } 
    console.log(filteredUsersArray);  
}
filterSimple();
console.log('jj');
// map
function mapSimple() {
    let changedArray = [];
    for(let i=0; i<brr.length; i++) {
        changedArray.push(brr[i] * 2)
    }
    console.log(changedArray);
}
mapSimple();
// reduce
const array1 = [1, 2, 3, 4];
const initialValue = 0;
let result = array1.reduce((sum, current) => sum + current, 0);
console.log(result);

let array = [1, 2, 3, 4, 5];
function reduceSimple() {
    let initial = 0;
    let accumulator = initial;
    for (let i = 0; i < array.length; i++ ) {
        accumulator += array[i];
    }
    return accumulator;
}
let resultReduce = reduceSimple();
console.log(resultReduce);

//sort asc, desc

let arrAsc = [2, 4, 7, 1, 9, 32, 5, 61, 89, 120];
arrAsc.sort((a,b) => a - b);
console.log(arrAsc);
let arrDesc = [2, 4, 7, 1, 9, 32, 5, 61, 89, 120];
arrDesc.sort((a,b) => b - a);
console.log(arrDesc);

let arrStr = ['e', 'r', 'a', 'd', 't'];
arrStr.sort((a,b) => a < b ? 1 : -1);
console.log(arrStr);

let people = {
    prop: 5,
    filterMethod (user) {
        return user.id < this.prop;
    },
}
let group = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"},
    {id: 5, name: "Pete"},
    {id: 6, name: "Mary"}
];
let filteredGroup = group.filter(people.filterMethod, people);
console.log(filteredGroup);
