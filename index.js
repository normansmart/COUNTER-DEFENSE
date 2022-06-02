
//////////////////////////////////


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
<<<<<<< Updated upstream
            if (advancerSelect === true) {
=======
            if (player1Select = true) {
                player1Select = false
                document.getElementById('ash').style.backgroundColor = "White"
                item.append(document.getElementById('ash'))


            }

        })

    }

    )



}





function firstRowCombat() {

    const firstRowFighterGary = document.querySelector('#d5 div')

    const firstRowFighterAsh = document.querySelector('#d1 div')

    const fighterOne = document.querySelector('.combatant-gary')

    const fighterTwo = document.querySelector('.combatant-ash')

    fighterOne.append(firstRowFighterGary)

    fighterTwo.append(firstRowFighterAsh)




}




>>>>>>> Stashed changes

                document.getElementById('advance').style.backgroundColor = "White"
                innerArr[0].append(document.getElementById('advance'))
                innerArr[0].id = "filled"


<<<<<<< Updated upstream
            }
=======

function combat2(){

    const fighterGaryPower = document.querySelector('.combatant-gary div h1').textContent
    
    const fighterAshPower = document.querySelector('.combatant-ash div h1').textContent

    const ashHealthBar = document.querySelector('.ash-health h1').textContent

    const garyHealthBar = document.querySelector('.gary-health h1').textContent




 if ( parseInt(fighterAshPower) > parseInt(fighterGaryPower) ){
     
   
>>>>>>> Stashed changes

    let powerDifference =  parseInt(fighterAshPower) - parseInt(fighterGaryPower);

    document.querySelector('.combatant-ash div h1').textContent = powerDifference

  
    const garyHealth = parseInt(garyHealthBar) - powerDifference
    document.querySelector('.gary-health h1').textContent = garyHealth
    



        })

<<<<<<< Updated upstream
        for (const item of innerArr) {


=======
    document.querySelector('.combatant-gary div').remove()


    d1.append(document.querySelector('.combatant-ash div'))
>>>>>>> Stashed changes





 } else if( parseInt(fighterGaryPower) > parseInt(fighterAshPower) ){



<<<<<<< Updated upstream
        }

=======
    let powerDifference =  parseInt(fighterGaryPower) - parseInt(fighterAshPower);

    document.querySelector('.combatant-gary div h1').textContent = powerDifference
>>>>>>> Stashed changes

    document.querySelector('.combatant-ash div').remove()


<<<<<<< Updated upstream
=======
    const ashHealth = parseInt(ashHealthBar) - powerDifference
    document.querySelector('.ash-health h1').textContent = ashHealth
    
>>>>>>> Stashed changes

    d5.append(document.querySelector('.combatant-gary div'))



 }

    }


}


<<<<<<< Updated upstream
=======








nextRound.addEventListener('click', (e) => {



    firstRowCombat()


    setTimeout(() => {
        combat1()
    }, 2000);





})










>>>>>>> Stashed changes
//feeds object information into parser that renders the cards in a div
renderCardsToDeck(advanceDeck);



//
placeCard(fieldBoxAdvance)







console.log(document.getElementsByClassName('gameCard'))