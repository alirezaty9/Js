let activePlayer, roundscore, scores, state, prevDice
i = 0
newGameHandler()
document.querySelector('.btn--roll').addEventListener('click', rollHandler)
document.querySelector('.btn--hold').addEventListener('click', holdHandler)
document.querySelector('.btn--new').addEventListener('click', newGameHandler)



function holdHandler() {

    if (state) {
        scores[activePlayer] += roundscore
        document.getElementById('score--' + activePlayer).textContent = scores[activePlayer]
        if (scores[activePlayer] >= 100) {

            document.getElementById('name--' + activePlayer).textContent = 'Winner'
            document.querySelector('.dice').style.display = 'none'
            document.querySelector('.player--' + activePlayer).classList.add('player--winner')
            document.querySelector('.player--' + activePlayer).classList.remove('player--active')
            state = false
        } else {
            nextPlayer()
        }
    }



}


function rollHandler() {
    if (state) {
        let dice = Math.floor(Math.random() * 6) + 1



        if (prevDice === 6 && dice === 6) {

            document.querySelector('#score--' + activePlayer).textContent = 0
            document.querySelector('#current--' + activePlayer).textContent = 0
            document.querySelector('#name--0').textContent = 'Player 1'

            console.log(prevDice, dice);
            nextPlayer()
        } else {

            document.querySelector('#current--' + activePlayer).textContent = dice
            let diceDOM = document.querySelector('.dice')
            diceDOM.style.display = 'block';
            diceDOM.src = ` dice-${dice}.png`
            if (dice !== 1) {

                roundscore += dice
                document.querySelector('#current--' + activePlayer).textContent = roundscore

            } else {
                nextPlayer()
            }
        }


        prevDice = dice
    }

}



function nextPlayer() {

    let diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'none'
    document.querySelector('#current--' + activePlayer).textContent = 0



    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1
    roundscore = 0

    if (activePlayer === 1) {
        document.querySelector('.player--0').classList.remove('player--active')
        document.querySelector('.player--1').classList.add('player--active')

    } else {
        document.querySelector('.player--1').classList.remove('player--active')
        document.querySelector('.player--0').classList.add('player--active')
    }
}

function newGameHandler() {
    scores = [0, 0]
    activePlayer = 0
    roundscore = 0
    state = true
    document.querySelector('.dice').style.display = 'none'
    document.querySelector('#current--0').textContent = 0
    document.querySelector('#current--1').textContent = 0
    document.querySelector('#score--0').textContent = 0
    document.querySelector('#score--1').textContent = 0
    document.querySelector('#name--0').textContent = 'Player 1'
    document.querySelector('#name--1').textContent = 'Player 2'
    document.querySelector('.player--0').classList.remove('player--winner')
    document.querySelector('.player--1').classList.remove('player--winner')
    // document.querySelector('.player--0').classList.remove('player--active')
    // document.querySelector('.player--1').classList.remove('player--active')
    document.querySelector('.player--0').classList.add('player--active')










}

