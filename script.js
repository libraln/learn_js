function sumSalaries(salaries) {
  const salaryArr =  Object.values(salaries);
  let sum = 0;
  for (let salary of salaryArr) {
    sum += salary;
  }
  return sum;
}

let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
  };
  
  alert( sumSalaries(salaries) ); // 650

  function count(obj) {
    return Object.keys(obj).length;
  }
  let user = {
    name: 'Іван',
    age: 30
  };
  
  alert( count(user) ); // 2