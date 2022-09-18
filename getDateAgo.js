function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();

}
let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 січня 2015)
alert( getDateAgo(date, 2) ); // 31, (31 грудня 2014)
alert( getDateAgo(date, 365) ); // 2, (2 січня 2014)
