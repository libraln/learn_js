function ucFirst(name) {
  let res = name[0].toUpperCase() + name.slice(1);
  console.log(res); 
  return res;
}
ucFirst("василь");

//

function checkSpam(str) {
  let strLowerCase = str.toLowerCase();
  if(strLowerCase.includes('viagra') || strLowerCase.includes('xxx')) {
    return true;
  }
  return false;
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

//

function truncate(str, maxlength) {
  if (str.length <= maxlength){
    return str;
  }
  let slicedStr = str.slice(0, maxlength - 1) + '...';
  return slicedStr;
}
console.log(truncate("Що я хотів би розповісти на цю тему:", 20)); 
console.log(truncate("Всім привіт!", 20));

//
function extractCurrencyValue(str) {
  let money = +str.slice(1);
  return money;
}

console.log(extractCurrencyValue('$120'));