
let inp = document.querySelector('input')
let counter = document.getElementById('counter')

function lenghHandler(e) {



// counter.textContent= 19 - inp.value.length


// ************  secound way  ***********

    // if (e.keyCode == 8) {
    //     if (counter.textContent < 19) {
    //         counter.textContent = Number(counter.textContent) + 1
    //     }
    // } else {
    //     if (counter.textContent > 0) {
    //         counter.textContent = Number(counter.textContent) - 1
    //     } else {
    //         counter.textContent == 0
    //     }

    // }





}
// ************ for secound way  ***********
// inp.addEventListener('keydown', lenghHandler)

inp.addEventListener('keyup', lenghHandler)

