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

<<<<<<< Updated upstream
//pushes created card variables into advanceCard deck. 
pushToAdvance(newAdvanceCard);
pushToAdvance(newAdvanceCard1);
pushToAdvance(newAdvanceCard2);
pushToAdvance(newAdvanceCard4);
=======
//ash's cards
let sceptile = new ashKetchumCard("Sceptile", 10, "https://i.kym-cdn.com/photos/images/original/001/065/267/f1d.jpg");
let pikachu = new ashKetchumCard("Pikachu", 12, "https://i.pinimg.com/originals/13/35/9b/13359bb6a2e6fe376ad221d7d57e5191.jpg");
let squirtle = new ashKetchumCard("Squirtle", 10, "https://64.media.tumblr.com/4127017e501cd0ac8b924285aacc20c3/tumblr_p4im6y3QDN1rjenv2o1_1280.jpg");
let charizard = new ashKetchumCard("Charizard", 9, "https://konachan.com/image/64be099dfca7edb2f54d7d717e0f4e64/Konachan.com%20-%20152854%20charizard%20dragon%20fire%20grass%20lif_%28lif-ppp%29%20pikachu%20pokemon%20wings.jpg");
let bulbasaur = new ashKetchumCard("Bulbasaur", 9, "https://i.pinimg.com/originals/d8/e5/44/d8e54478d116d9c435ed6f0aed48c3e7.jpg");
let lapras = new ashKetchumCard("Lapras", 9, './images/lapras.jpeg');
let pidgeot = new ashKetchumCard("Pidgeot", 9, 'https://i.pinimg.com/originals/12/90/4c/12904cf5f3b2103dd98128fe9cd8a223.jpg');
let machamp = new ashKetchumCard("Machamp", 9, 'https://pbs.twimg.com/media/Dns-IK9W0AAqQxj?format=jpg&name=medium');
let rayquaza = new ashKetchumCard("Rayquaza", 9, 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0eb0f155-e353-4cbc-882d-ea2e9025c5b5/ddduvpy-89780fc7-cc24-4b95-a2db-fec86b1ac2ef.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBlYjBmMTU1LWUzNTMtNGNiYy04ODJkLWVhMmU5MDI1YzViNVwvZGRkdXZweS04OTc4MGZjNy1jYzI0LTRiOTUtYTJkYi1mZWM4NmIxYWMyZWYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Wj_TncuOijhl7xI7OJhNeb_RLDGBNvNS1nVmIThmrYw');
let arceus = new ashKetchumCard("Arceus", 9, 'https://i.pinimg.com/originals/9f/26/ce/9f26ce59a9f7b5f7df79bcbf7bc9eedd.jpg');
//pushes created card variables into advanceCard deck. 
pushToAshDeck(charizard);
pushToAshDeck(sceptile);
pushToAshDeck(rayquaza);
pushToAshDeck(arceus);
pushToAshDeck(pikachu);
pushToAshDeck(pikachu);
pushToAshDeck(squirtle);
pushToAshDeck(squirtle);
pushToAshDeck(pidgeot);
pushToAshDeck(lapras);
pushToAshDeck(machamp);


>>>>>>> Stashed changes











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
<<<<<<< Updated upstream
let newBlockCard = new blockerCard("Gon" , 3 , 6);
let newBlockCard1 = new blockerCard("Franz" , 2 , 9);
let newBlockCard2 = new blockerCard("Redding" , 4 , 15);
let newBlockCard4 = new blockerCard("Henna" , 2 , 19);
=======
let newBlockCard = new garyOakCard("Psyduck", 20, "garyOakCard");
let newBlockCard1 = new garyOakCard("Squirtle", 12, "garyOakCard");
let newBlockCard2 = new garyOakCard("Mew II", 10, "garyOakCard");
let newBlockCard4 = new garyOakCard("Togepi", 7, "garyOakCard");
>>>>>>> Stashed changes


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














