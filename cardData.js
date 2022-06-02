// utility/shorcut methods
const $ = query => document.querySelector( query);




// constructs objects containing card information for advancer deck
  class advanceCard{ 
    
    constructor(name, cost, power, type) {
        this.name = name;
        this.cost = cost;
        this.power = power;  
        this.type = type;
      
    }
  
 } 


 //deck array that holds cards that advance
const advanceDeck = []


//function to push initialized advance cards to deck array
function pushToAdvance(card){
  	
    advanceDeck.push(card);
    
  }



<<<<<<< Updated upstream
//advancer cards
let newAdvanceCard = new advanceCard("Yhorm" , 10 , 15 , "advancer");
let newAdvanceCard1 = new advanceCard("happy" , 2 , 7);
let newAdvanceCard2 = new advanceCard("Queri" , 1 , 12);
let newAdvanceCard4 = new advanceCard("Jerry" , 2 , 21);
=======
//ash's cards
let sceptile = new ashKetchumCard("Sceptile", 10, "ashKetchumCard", "./images/sceptile.jpeg");
let pikachu = new ashKetchumCard("Pikachu", 2, "ashKetchumCard", "./images/pikachu.jpg");
let squirtle = new ashKetchumCard("Squirtle", 1, "ashKetchumCard", "https://i.kym-cdn.com/photos/images/original/001/065/267/f1d.jpg");
let charizard = new ashKetchumCard("Charizard", 2, "ashKetchumCard", "./images/sceptile.jpeg");
>>>>>>> Stashed changes

//pushes created card variables into advanceCard deck. 
pushToAdvance(newAdvanceCard);
pushToAdvance(newAdvanceCard1);
pushToAdvance(newAdvanceCard2);
pushToAdvance(newAdvanceCard4);









// constructs objects containing card information for blocker deck
  class blockerCard{
    
    constructor(name, cost, power) {
        this.name = name;
        this.cost = cost;
        this.power = power;
    }
  
}

//array that holds cards that block
const blockDeck = []

//blocker cards to be initialized
let newBlockCard = new blockerCard("Gon" , 3 , 6);
let newBlockCard1 = new blockerCard("Franz" , 2 , 9);
let newBlockCard2 = new blockerCard("Redding" , 4 , 15);
let newBlockCard4 = new blockerCard("Henna" , 2 , 19);


//function that pushes initialized blocker cards to the deck array
function pushToBlock(card){
  	
  blockDeck.push(card);
  
}


//pushes created blocker card
pushToBlock(newBlockCard);
pushToBlock(newBlockCard1);
pushToBlock(newBlockCard2);
pushToBlock(newBlockCard4);







// sets card selection for when a card is to be placed, default value false

let advancerSelect = false
// function to render each card array
function renderCardsToDeck(cardDeck){

// for each card obj in deck array
    cardDeck.forEach(cardInfoObj => {


    //creates div the card info will be rendered on a created div
  
    const card = document.createElement("div");
    card.className = "gameCard";

    //create tags for the card obj key values
    const cardName = document.createElement('h2');
    const cardCost = document.createElement('h2');
    const cardPower = document.createElement('h2');

    //tags text content set to card obj key values
<<<<<<< Updated upstream
    cardName.textContent = cardInfoObj.name;
    cardCost.textContent = cardInfoObj.cost;
    cardPower.textContent = cardInfoObj.power;

    //append card obj info onto the card div: 
    card.append(cardName, cardCost, cardPower);
=======
    ashCardName.textContent = cardInfoObj.name;
    ashCardPower.textContent = cardInfoObj.power;
    ashCardImage.src = cardInfoObj.image


    //append card obj info onto the card div: 
    ashCard.append(ashCardName, ashCardPower, ashCardImage);


>>>>>>> Stashed changes


    


    // appends each created card onto the player hud
    document.querySelector('.combatant-1').append(card);

  

 //on click, changes the poperties of the card div and sets card selector to true
card.addEventListener('click' , (e) =>{

 
    advancerSelect = true

    card.style.backgroundColor= "Blue"

    card.id = "advance"

    
   

 })
    


    });

    

    

}






<<<<<<< Updated upstream
=======
      garyCard.id = "gary"


>>>>>>> Stashed changes








<<<<<<< Updated upstream
=======


}










function combat1() {

  const fighterGaryPower = document.querySelector('.combatant-gary div h1').textContent

  const fighterAshPower = document.querySelector('.combatant-ash div h1').textContent

  const ashHealthBar = document.querySelector('.ash-health h1').textContent

  const garyHealthBar = document.querySelector('.gary-health h1').textContent




  if (parseInt(fighterAshPower) > parseInt(fighterGaryPower)) {



    let powerDifference = parseInt(fighterAshPower) - parseInt(fighterGaryPower);

    document.querySelector('.combatant-ash div h1').textContent = powerDifference


    const garyHealth = parseInt(garyHealthBar) - powerDifference
    document.querySelector('.gary-health h1').textContent = garyHealth





    document.querySelector('.combatant-gary div').remove()


    d1.append(document.querySelector('.combatant-ash div'))





  } else if (parseInt(fighterGaryPower) > parseInt(fighterAshPower)) {



    let powerDifference = parseInt(fighterGaryPower) - parseInt(fighterAshPower);

    document.querySelector('.combatant-gary div h1').textContent = powerDifference

    document.querySelector('.combatant-ash div').remove()


    const ashHealth = parseInt(ashHealthBar) - powerDifference
    document.querySelector('.ash-health h1').textContent = ashHealth


    d5.append(document.querySelector('.combatant-gary div'))



  }



}








>>>>>>> Stashed changes
