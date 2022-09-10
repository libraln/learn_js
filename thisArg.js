let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
  };
  
  let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
  ];
  
  // знайти користувачів, для яких army.canJoin повертає true
  let soldiers = users.filter(army.canJoin, army);
  
  alert(soldiers.length); // 2
  alert(soldiers[0].age); // 20
  alert(soldiers[1].age); // 23