
//////////////////////////////////

function gg(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(response => response.json())
      .then(pokeData => {

     const iconUrl =  pokeData.results[0].url

     fetch(iconUrl)
      .then(response => response.json())
      .then(pokeData => {

        const ggMessage = document.querySelector('.game-over')
       const ggImage =  document.querySelector('.game-over-image')
       ggMessage.style.display = "block"
       

       ggImage.src = pokeData.sprites.front_shiny
        

     
      })
     
      })
    
    }




 
  

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
                document.getElementById('ash').style.border = "none"

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




    if (firstRowFighterGary === null) {

       

        console.log("this is null")

        const emptyFighter = document.createElement('div')
        const emptyFighterPower = document.createElement('h1')
        emptyFighterPower.textContent = '0'
        emptyFighter.id = "empty"

        emptyFighter.append(emptyFighterPower)

        fighterOne.append(emptyFighter)



    } else if (firstRowFighterAsh === null) {


        console.log("this is null")

        const emptyFighter = document.createElement('div')
        const emptyFighterPower = document.createElement('h1')
        emptyFighterPower.textContent = '0'
        emptyFighter.id = "empty"

        emptyFighter.append(emptyFighterPower)


        fighterTwo.append(emptyFighter);
    }



}




function secondRowCombat() {

    const secondRowFighterGary = document.querySelector('#c5 div')

    const secondRowFighterAsh = document.querySelector('#c1 div')

    const fighterOne = document.querySelector('.combatant-gary')

    const fighterTwo = document.querySelector('.combatant-ash')

    fighterOne.append(secondRowFighterGary)

    fighterTwo.append(secondRowFighterAsh)



    if (secondRowFighterGary === null) {

     

        console.log("this is null")

        const emptyFighter = document.createElement('div')
        const emptyFighterPower = document.createElement('h1')
        emptyFighterPower.textContent = '0'
        emptyFighter.id = "empty"

        emptyFighter.append(emptyFighterPower)

        fighterOne.append(emptyFighter)



    } else if (secondRowFighterAsh === null) {


        console.log("this is null")

        const emptyFighter = document.createElement('div')
        const emptyFighterPower = document.createElement('h1')
        emptyFighterPower.textContent = '0'
        emptyFighter.id = "empty"

        emptyFighter.append(emptyFighterPower)


        fighterTwo.append(emptyFighter);
    }


}


function thirdRowCombat() {

    const thirdRowFighterGary = document.querySelector('#b5 div')

    const thirdRowFighterAsh = document.querySelector('#b1 div')

    const fighterOne = document.querySelector('.combatant-gary')

    const fighterTwo = document.querySelector('.combatant-ash')

    fighterOne.append(thirdRowFighterGary)

    fighterTwo.append(thirdRowFighterAsh)


    if (thirdRowFighterGary === null) {

       

        console.log("this is null")

        const emptyFighter = document.createElement('div')
        const emptyFighterPower = document.createElement('h1')
        emptyFighterPower.textContent = '0'
        emptyFighter.id = "empty"

        emptyFighter.append(emptyFighterPower)

        fighterOne.append(emptyFighter)



    } else if (thirdRowFighterAsh === null) {


        console.log("this is null")

        const emptyFighter = document.createElement('div')
        const emptyFighterPower = document.createElement('h1')
        emptyFighterPower.textContent = '0'
        emptyFighter.id = "empty"

        emptyFighter.append(emptyFighterPower)


        fighterTwo.append(emptyFighter);
    }

}



function fourthRowCombat() {

    const fourthRowFighterGary = document.querySelector('#a5 div')

    const fourthRowFighterAsh = document.querySelector('#a1 div')

    const fighterOne = document.querySelector('.combatant-gary')

    const fighterTwo = document.querySelector('.combatant-ash')

    fighterOne.append(fourthRowFighterGary)

    fighterTwo.append(fourthRowFighterAsh)


    if (fourthRowFighterGary === null) {

       

        console.log("this is null")

        const emptyFighter = document.createElement('div')
        const emptyFighterPower = document.createElement('h1')
        emptyFighterPower.textContent = '0'
        emptyFighter.id = "empty"

        emptyFighter.append(emptyFighterPower)

        fighterOne.append(emptyFighter)



    } else if (fourthRowFighterAsh === null) {


        console.log("this is null")

        const emptyFighter = document.createElement('div')
        const emptyFighterPower = document.createElement('h1')
        emptyFighterPower.textContent = '0'
        emptyFighter.id = "empty"

        emptyFighter.append(emptyFighterPower)


        fighterTwo.append(emptyFighter);
    }

}






function combat(field1 , field2) {

    const fighterGaryPower = document.querySelector('.combatant-gary div h1').textContent

    const fighterAshPower = document.querySelector('.combatant-ash div h1').textContent

    const ashHealthBar = document.querySelector('.ash-health h1').textContent

    const garyHealthBar = document.querySelector('.gary-health h1').textContent

    if (parseInt(fighterAshPower) > parseInt(fighterGaryPower)) {



        let powerDifference = parseInt(fighterAshPower) - parseInt(fighterGaryPower);

        document.querySelector('.combatant-ash div h1').textContent = powerDifference


        const garyHealth = parseInt(garyHealthBar) - powerDifference

        if(garyHealth <= 0){
            gg()
        }
        
        document.querySelector('.gary-health h1').textContent = garyHealth

        document.querySelector('.combatant-gary div').remove()




        field1.append(document.querySelector('.combatant-ash div'))






    } else if (parseInt(fighterGaryPower) > parseInt(fighterAshPower)) {


        let powerDifference = parseInt(fighterGaryPower) - parseInt(fighterAshPower);

        document.querySelector('.combatant-gary div h1').textContent = powerDifference

        document.querySelector('.combatant-ash div').remove()


        const ashHealth = parseInt(ashHealthBar) - powerDifference

        if(ashHealth <= 0){
            gg()
        }

        document.querySelector('.ash-health h1').textContent = ashHealth

        field2.append(document.querySelector('.combatant-gary div'))




    } else if (parseInt(fighterGaryPower) = 0) {

         parseInt(garyHealthBar) - parseInt(fighterAshPower)

         if(garyHealth <= 0){
            gg()
        }

         field1.append(document.querySelector('.combatant-ash div'))

    } else if (parseInt(fighterAshPower) = 0) {

       parseInt(ashHealthBar) - parseInt(fighterGaryPower)

       if(garyHealth <= 0){
        gg()
    }

       field2.append(document.querySelector('.combatant-gary div'))


    } else {


        document.querySelector('.combatant-ash div').remove()
        document.querySelector('.combatant-gary div').remove()

    }



}














nextRound.addEventListener('click', (e) => {

 
    firstRowCombat()


    setTimeout(() => {
        combat(d1 , d5)
    }, 2000);


 
  

    setTimeout(() => {
        secondRowCombat()
    }, 4000);



    setTimeout(() => {
        combat(c1 , c5)
    }, 6000);




    setTimeout(() => {
        thirdRowCombat()
    }, 8000);



    setTimeout(() => {
        combat(b1 , b5)
    }, 10000);



    setTimeout(() => {
        fourthRowCombat()
    }, 12000);


    setTimeout(() => {
        combat(a1 , a5)
    }, 14000);



})








shuffle(ashDeck);
shuffle(garyOakDeck);

//feeds object information into parser that renders the cards in a div
renderAshCardsToDeck(ashDeck);

renderGaryCardsToDeck(garyOakDeck);


//
ashCardToHand(fieldBox[0])

garyCardToHand(fieldBox[1])




function fieldCheck(field1, field2, field3, field4) {

    if (field1.childElementCount = 1) {
        field2.append(document.querySelector('.combatant-ash div'))

    } else if (field2.childElementCount = 1) {

        field3.append(document.querySelector('.combatant-ash div'))



    } else if (field3.childElementCount = 1) {

        field4.append(document.querySelector('.combatant-ash div'))



    }



}