const days1=document.getElementById("days1");
const hours1=document.getElementById("hours1");
const minutes1=document.getElementById("minutes1");
const seconds1=document.getElementById("seconds1");
const year1=document.getElementById("year1");
const countdown1=document.getElementById("countdown1");

const currentYear1=new Date().getFullYear();
const newYear1=currentYear+1;
let newYearTime1=new Date(`September 18 2024 00:00:00`);

function update()
{
    let currentTime=new Date();
    let diff=newYearTime1-currentTime;

    let d1=Math.floor(diff/1000/60/60/24);
    let h1=Math.floor(diff/1000/60/60)%24;
    let m1=Math.floor(diff/1000/60)%60;
    let s1=Math.floor(diff/1000)%60;

    days1.innerHTML=d1 < 10 ? "0"+d1 : d1;
    hours1.innerHTML=h1 < 10 ? "0"+h1 : h1;
    minutes1.innerHTML=m1 < 10 ? "0"+m1 : m1;
    seconds1.innerHTML=s1 < 10 ? "0"+s1 : s1;
}

setInterval(update,1000)