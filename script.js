let styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log();
console.log(styles);
styles[Math.floor((styles.length -1)  /2) ] = "Classics";
console.log(styles);
styles.shift()
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles);

function sumInput() {
    let num = 0;
    let arr = [];
    while(num!=='' && num!==null && !isNaN(num)) {
       num = prompt('input number', 0);
       arr.push(+num);
    } 
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum +=arr[i];
    }
    console.log(arr.length);
    console.log(sum);
    return sum;
}
sumInput();



