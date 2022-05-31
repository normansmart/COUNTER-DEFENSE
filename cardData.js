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



//advancer cards
let newAdvanceCard = new advanceCard("Yhorm" , 10 , 15 , "advancer");
let newAdvanceCard1 = new advanceCard("happy" , 2 , 7);
let newAdvanceCard2 = new advanceCard("Queri" , 1 , 12);
let newAdvanceCard4 = new advanceCard("Jerry" , 2 , 21);

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
    cardName.textContent = cardInfoObj.name;
    cardCost.textContent = cardInfoObj.cost;
    cardPower.textContent = cardInfoObj.power;

    //append card obj info onto the card div: 
    card.append(cardName, cardCost, cardPower);


    


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














