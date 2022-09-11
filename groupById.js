let users = [
    {id: 'іван', name: "Іван Іванко", age: 20},
    {id: 'ганна', name: "Ганна Іванко", age: 24},
    {id: 'петро', name: "Петро Петренко", age: 31},
  ];
  
  let usersById = groupById(users);
  console.log(usersById);
  /*
  // після виклику функції ви повинні отримати:
  
  usersById = {
    іван: {id: 'іван', name: "Іван Іванко", age: 20},
    ганна: {id: 'ганна', name: "Ганна Іванко", age: 24},
    петро: {id: 'петро', name: "Петро Петренко", age: 31},
  }
  */

  function groupById(arr) {
    let acc;
    return arr.reduce( (acc, item) => {
       acc[item.id] = item;
       return acc;
    },  {}  )
  }