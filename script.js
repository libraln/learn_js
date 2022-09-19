let user = {
    name: "Іван Іванов",
    age: 35
  };
  let userJson = JSON.stringify(user);
  console.log(userJson);
  console.log(JSON.parse(userJson));

  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Конференція",
    occupiedBy: [{name: "Іван"}, {name: "Аліса"}],
    place: room
  };
  
  // циклічне посилання
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));
  
  /* результат повинен бути:
  {
    "title":"Конференція",
    "occupiedBy":[{"name":"Іван"},{"name":"Аліса"}],
    "place":{"number":23}
  }
  */