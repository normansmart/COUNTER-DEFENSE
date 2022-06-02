







//deck array that holds cards for ash ketchum character
const ashDeck = []

// constructs objects containing card information for advancer deck
class ashKetchumCard {

  constructor(name, power, type, image) {
    this.name = name;

    this.power = power;

    this.type = type;

    this.image = image;
  }

}


//function to push initialized advance cards to deck array
function pushToAshDeck(card) {

  ashDeck.push(card);

}



//ash's cards
let sceptile = new ashKetchumCard("Sceptile", 10, "ashKetchumCard" , "./images/sceptile.jpeg");
let pikachu = new ashKetchumCard("Pikachu", 2, "ashKetchumCard" , "./images/pikachu.jpg");
let squirtle = new ashKetchumCard("Squirtle", 1, "ashKetchumCard" , "https://i.kym-cdn.com/photos/images/original/001/065/267/f1d.jpg");
let charizard = new ashKetchumCard("Charizard", 2, "ashKetchumCard" , "./images/sceptile.jpeg");

//pushes created card variables into advanceCard deck. 
pushToAshDeck(sceptile);
pushToAshDeck(pikachu);
pushToAshDeck(squirtle);
pushToAshDeck(charizard);









// constructs objects containing card information for blocker deck
class garyOakCard {

  constructor(name, power, type, image) {
    this.name = name;

    this.power = power;

    this.type = type;

    this.image = image;
  }

}

//array that holds cards that block
const garyOakDeck = []

//blocker cards to be initialized
let newBlockCard = new garyOakCard("Psyduck", 3, "garyOakCard");
let newBlockCard1 = new garyOakCard("Squirtle", 2, "garyOakCard");
let newBlockCard2 = new garyOakCard("Mew II", 4, "garyOakCard");
let newBlockCard4 = new garyOakCard("Togepi", 2, "garyOakCard");


//function that pushes initialized blocker cards to the deck array
function pushToGaryDeck(card) {

  garyOakDeck.push(card);

}


//pushes created blocker card
pushToGaryDeck(newBlockCard);
pushToGaryDeck(newBlockCard1);
pushToGaryDeck(newBlockCard2);
pushToGaryDeck(newBlockCard4);










// function to render each card array
function renderAshCardsToDeck(cardDeck) {



  // for each card obj in deck array
  cardDeck.forEach(cardInfoObj => {



    //creates div the card info will be rendered on a created div

    const ashCard = document.createElement("div");
    ashCard.className = "gameCard";

    //create tags for the card obj key values
    const ashCardName = document.createElement('h3');
    const ashCardPower = document.createElement('h1');

    const ashCardImage = document.createElement('img');

    //tags text content set to card obj key values
    ashCardName.textContent = cardInfoObj.name;
    ashCardPower.textContent = cardInfoObj.power;
    ashCardImage.src = cardInfoObj.image
    

    //append card obj info onto the card div: 
    ashCard.append(ashCardName, ashCardPower , ashCardImage);






    // appends each created card onto the player hud
    document.querySelector('.player-1').append(ashCard);




    //on click, changes the poperties of the card div and sets card selector to true
    ashCard.addEventListener('click', (e) => {

      ashCard.style.border = "solid 5px blue"

      ashCard.id = "ash"



    })



  });




}





function renderGaryCardsToDeck(cardDeck) {



  // for each card obj in deck array
  cardDeck.forEach(cardInfoObj => {



    //creates div the card info will be rendered on a created div

    const garyCard = document.createElement("div");
    garyCard.className = "gameCard";

    //create tags for the card obj key values
    const garyCardName = document.createElement('h3');
    const garyCardPower = document.createElement('h1');

    //tags text content set to card obj key values
    garyCardName.textContent = cardInfoObj.name;
    garyCardPower.textContent = cardInfoObj.power;

    //append card obj info onto the card div: 
    garyCard.append(garyCardName, garyCardPower);





    // appends each created card onto the player hud
    document.querySelector('.player-2').append(garyCard);
    let player2Select = false

    //on click, changes the poperties of the card div and sets card selector to true
    garyCard.addEventListener('click', (e) => {

      garyCard.style.backgroundColor = "Green"

      garyCard.id = "gary"

   

    })





  });




}

