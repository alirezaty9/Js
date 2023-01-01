let day_el=document.getElementById('day_el')

let hour_el=document.getElementById('hour_el')
let min_el=document.getElementById('min_el')
let sec_el=document.getElementById('sec_el')
const BirthDay = "30 nov 2022"

function countdown() {
  

    const BirthDaydate = new Date(BirthDay);
    const currentDay = new Date();

    let totalsecond = Math.floor((BirthDaydate - currentDay) / 1000)
    let day = Math.floor(totalsecond / 3600 / 24)
    let hour = Math.floor(totalsecond / 3600) % 24
    let min = Math.floor(totalsecond / 60) % 60
    let second = Math.floor(totalsecond) % 60
    // let seco = min / 60
    
day_el.innerHTML=day

hour_el.innerHTML=hour
min_el.innerHTML=min
sec_el.innerHTML=second

}

setInterval(countdown, 1000)
countdown()