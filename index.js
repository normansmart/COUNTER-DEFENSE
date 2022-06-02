
//////////////////////////////////




const nextRound = document.querySelector('.nextRound')



//spaces where ash can place his pokemon cards
const fieldBox = [[d1, c1, b1, a1], [d5, c5, b5, a5]];


//positions

function garyCardToHand(arr) {


    arr.forEach(item => {

        // event listener for when a space is clicked 
        item.addEventListener('click', (e) => {

            //if advancer card selector is true
            if (player2Select = true) {
                player2Select = false
                document.getElementById('gary').style.backgroundColor = "White"
                item.append(document.getElementById('gary'))


            }

        })

    }

    )



}





function ashCardToHand(arr) {


    arr.forEach(item => {


        // event listener for when a space is clicked 
        item.addEventListener('click', (e) => {

            //if advancer card selector is true
            if (player1Select = true) {
                player1Select = false
                document.getElementById('ash').style.backgroundColor = "White"
                item.append(document.getElementById('ash'))


            }

        })

    }

    )



}















let firstAttack = false



nextRound.addEventListener('click', (e) => {

    firstAttack = true

    const firstRowFighterGary = document.querySelector('#d5 div')

    const firstRowFighterAsh = document.querySelector('#d1 div')

    const fighterOne = document.querySelector('.combatant-gary')

    const fighterTwo = document.querySelector('.combatant-ash')

    fighterOne.append(firstRowFighterGary)

    fighterTwo.append(firstRowFighterAsh)

})










//feeds object information into parser that renders the cards in a div
renderAshCardsToDeck(ashDeck);

renderGaryCardsToDeck(garyOakDeck);


//
ashCardToHand(fieldBox[0])

garyCardToHand(fieldBox[1])




