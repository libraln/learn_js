function camelize(str) {
    let res = str.split('-');
    let camel = res.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    ).join('');    
    return camel;
}
let arr = camelize("background-color");
console.log(arr);