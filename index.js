
//////////////////////////////////



//
let gameDeck = document.getElementsByClassName("combatant-1");

const nextRound = document.querySelector('.nextRound')
const advancingCard = document.querySelector('#advance')
const field = document.querySelector(".field-box");


const fieldBoxAdvance = [[d1, d2, d3, d4, d5], [c1, c2, c3, c4, c5], [b1, b2, b3, b4, b5], [a1, a2, a3, a4, a5]];


//positions



function placeCard(arr) {


    for (const innerArr of arr) {




        // event listener for when a space is clicked 
        innerArr[0].addEventListener('click', (e) => {

            //if advancer card selector is true
            if (advancerSelect === true) {

                document.getElementById('advance').style.backgroundColor = "White"
                innerArr[0].append(document.getElementById('advance'))
                innerArr[0].id = "filled"


            }






        })

        for (const item of innerArr) {










        }









    }


}


//feeds object information into parser that renders the cards in a div
renderCardsToDeck(advanceDeck);



//
placeCard(fieldBoxAdvance)







console.log(document.getElementsByClassName('gameCard'))