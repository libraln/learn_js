let user = {
    name: "Іван",
    years: 30
  };

let { name, years: age, isAdmin = false } = user;
alert( name ); // Іван
alert( age ); // 30
alert( isAdmin ); // false

let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
  };
  console.log(topSalary(salaries));

  function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;
   let arr = Object.entries(salaries);
   for (let employee of arr) {
    let [name, salary] = employee;
    if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
    }
   }
   return maxName;
  }