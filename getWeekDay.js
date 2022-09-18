let date = new Date(2012, 01, 20, 3, 12);
alert(date);

function getWeekDay(date) {
    let days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}
let date = new Date(2012, 0, 3);  // 3 січня 2012
alert( getWeekDay(date) );        // повинно виводити "ВТ"