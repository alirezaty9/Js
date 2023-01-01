let stage1 = document.getElementById('stage1')
let stage2 = document.getElementById('stage2')
let startBtn = document.getElementById('start')
let maximum = document.getElementById('maximum')
let guess = document.getElementById('guess-number')
let guessBtn = document.getElementById('guess-button')
let chanses = document.getElementById('chances')
let status = document.getElementById('status');

let target
// console.log(maximum)
// console.log(h2)

startBtn.addEventListener('click', sayhello)

function sayhello() {
    maximum = Number(maximum.value)
    if (maximum > 10) {
        random = Math.floor((Math.random() * maximum) + 1)
        totalChances = Math.floor(Math.log2(maximum)) + 1;
        chanses.innerHTML = totalChances
        chanses.classList.add('red')
        stage1.classList.toggle('hidden')
        stage2.classList.toggle('hidden')
    }
    else {
        let p = document.querySelector("#stage1 p")
        p.innerHTML = "<p class='red'> عدد وارد شده باید بزرگ تر از ۱۰ باشد  </P>"
    }
    console.log(random)
}



guessBtn.addEventListener('click', sayhello1)
function sayhello1() {
    yourGuess = Number(guess.value)
    if (yourGuess>0&& yourGuess<=maximum) {
        if (yourGuess == random) {
            stage2.innerHTML = '<p class="green">تبریک! شما موفق شدید</p>';
            return;
        }

        else if (yourGuess > random) {
            status.innerHTML += `<span class="red">${yourGuess}</span> `;
            guess.value = ""
        }
        else {  
            status.innerHTML += `<span class="blue">${yourGuess}</span> `;
            guess.value = ""
        }
        let remain = Number(chanses.textContent);
        remain--
        if (remain > 0) {
            chanses.textContent = remain
        } else {
            stage2.innerHTML = '<p class="red">متاسفانه فرصت شما به پایان رسید!</p>';
        }
    } else {
        alert(`لطفا عددی بین 0 و ${maximum}انتخاب کنید`)
    }



}
