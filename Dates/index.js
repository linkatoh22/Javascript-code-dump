

const date = new Date();
console.log(date);
//Date (year,month,day,hour,minute,second,ms);
const date_1 = new Date (2024,0,1,2,3,4,5);
console.log(date_1);
//GET CURRENT DATE
const year = date.getFullYear();
const month= date.getMonth();
const day= date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const second = date.getSeconds();
const DayofWeek = date.getDay();
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(second);
console.log(DayofWeek);
//SET DATE
const set_date = new Date();
set_date.setFullYear(2024);
set_date.setMonth(0);
set_date.setDate(1);
//COMPARE DATE
const date1 = new Date("2023-12-31");
const date2 = new Date("2023-12-30");

if(date2>date1)
    {
        //DO SOMETHING
    }