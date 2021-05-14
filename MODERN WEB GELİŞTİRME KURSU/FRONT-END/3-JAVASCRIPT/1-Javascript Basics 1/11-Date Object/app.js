let value;

const now = new Date(); //Su anki zaman
//console.log(now);

const date1 = new Date("9-12-1991 12:22:02");
const date2 = new Date("September 12 1991");
const date3 = new Date("9/12/1991");

value = date1;

value = date2.getMonth(); // 8, normalde 9 olmali; 0 dan basliyor
value = date2.getDate(); // 12
value = date3.getDay(); // 4, pazar 0 olarak aliniyor

value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();

date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(1992);
date1.setHours(0);
date1.setMinutes(15);
date1.setSeconds(30);

value = date1;

console.log(value);