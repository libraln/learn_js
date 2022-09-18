function getLocalDay(date) {
    console.log(date.getDay());
    return date.getDay();
    // let day = date.getDay();

    // if (day == 0) { // weekday 0 (sunday) is 7 in european
    //   day = 7;
    // }
  
    // return day;
}

let date = new Date(2012, 0, 3);  // 3 січня 2012
alert( getLocalDay(date) );       // вівторок, слід показати 2