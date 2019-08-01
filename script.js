'use.strict';

//1
let today = new Date();
function min_left(date){
    let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1),
    diff = tomorrow - date;
    return Math.floor((diff / 60000) * 100) / 100;
}
console.log(min_left(today));

//2
let now = new Date;
function getSecToday(){
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate() );

    let diff = now - today;
    return Math.floor(diff / 1000);
}
console.log(getSecToday());

//3
let jan25_2013 = new Date(2013, 0, 25);
function getName (date){
    let weekDays = ['Sun', 'Mon','Tues','Wed', 'Thu', 'Fri', 'Sat'];
    return weekDays[date.getDay()];
}
console.log(getName(jan25_2013));

//4 

let date = prompt('Please enter your date of birth in format 2001-12-01', '');
function calcDays(dateBirth) {
    let today = new Date(),
    birthDay = new Date(Date.parse(dateBirth));

    birthDay.setFullYear(+today.getFullYear());
    if (birthDay <= today) {
        birthDay.setFullYear(+birthDay.getFullYear() + 1);
      }
    let ms = 1000 * 60 * 60 * 24 ;
    let diff =  Math.round((+birthDay - today) / ms);
    return alert(diff + ' days until your birthday');
}
console.log(calcDays(date));