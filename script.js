let user = {};
user.name = "Ivan";
user.surname = "Smith";
user.name = "Petro";
delete user.name;


//перевірка чи об'єкт пустий

function isEmpty(object) {
  for (key in object) {
    return false;
  }
  return true;
}

//
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

function calcSum (obj) {
  for ( let key in obj) {
    sum += obj[key]; 
  }
  return sum;
}

let result = calcSum(salaries);
console.log(result);
//
let menu = {
  width: 200,
  height: 300,
  title: "Моє меню"
};

let res = multiplyNumeric(menu);
console.log(menu);

menu = {
  width: 400,
  height: 600,
  title: "Моє меню"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] !== "number") {
      continue;
    }
    obj[key] *= 2;
  }
}



