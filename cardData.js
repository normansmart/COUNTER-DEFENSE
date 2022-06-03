







//deck array that holds cards for ash ketchum character
const ashDeck = []

// constructs objects containing card information for advancer deck
class ashKetchumCard {

  constructor(name, power, image) {
    this.name = name;

    this.power = power;

    this.image = image;
  }

}


//function to push initialized advance cards to deck array
function pushToAshDeck(card) {

  ashDeck.push(card);

}



//ash's cards

let gyrados = new ashKetchumCard("Gyrados", 9, 'https://i.redd.it/rvoivz72p3m41.jpg');
let tyranitar = new ashKetchumCard("Tyranutar", 9, 'https://i.pinimg.com/originals/53/79/39/5379392fd5ceda33731b75a9134d7421.jpg');
let magikarp = new ashKetchumCard("Magikarp", 9, 'https://pbs.twimg.com/media/CokvmXcUEAAhuz-?format=jpg&name=900x900');
let sceptile = new ashKetchumCard("Sceptile", 10, "https://i.kym-cdn.com/photos/images/original/001/065/267/f1d.jpg");
let pikachu = new ashKetchumCard("Pikachu", 12, "https://i.pinimg.com/originals/13/35/9b/13359bb6a2e6fe376ad221d7d57e5191.jpg");
let squirtle = new ashKetchumCard("Squirtle", 10, "https://64.media.tumblr.com/4127017e501cd0ac8b924285aacc20c3/tumblr_p4im6y3QDN1rjenv2o1_1280.jpg");
let charizard = new ashKetchumCard("Charizard", 9, "https://konachan.com/image/64be099dfca7edb2f54d7d717e0f4e64/Konachan.com%20-%20152854%20charizard%20dragon%20fire%20grass%20lif_%28lif-ppp%29%20pikachu%20pokemon%20wings.jpg");
let bulbasaur = new ashKetchumCard("Bulbasaur", 9, "https://i.pinimg.com/originals/d8/e5/44/d8e54478d116d9c435ed6f0aed48c3e7.jpg");
let lapras = new ashKetchumCard("Lapras", 9, './images/lapras.jpeg');
let mew = new ashKetchumCard("Mew", 9, 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0f4e9ef5-fbc4-400e-8e98-00d3452c2236/d7piy4l-4eb824f1-99d0-4f1c-a84a-3907f55a4fb3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBmNGU5ZWY1LWZiYzQtNDAwZS04ZTk4LTAwZDM0NTJjMjIzNlwvZDdwaXk0bC00ZWI4MjRmMS05OWQwLTRmMWMtYTg0YS0zOTA3ZjU1YTRmYjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jsoSlzD51BWl7vHOf5pqWXz8Z8blpBLfMXDaIYlFhBo');
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
pushToAshDeck(squirtle);
pushToAshDeck(lapras);
pushToAshDeck(machamp);
pushToAshDeck(mew);
pushToAshDeck(gyrados);
pushToAshDeck(magikarp);
pushToAshDeck(magikarp);
pushToAshDeck(tyranitar);













// constructs objects containing card information for blocker deck
class garyOakCard {

  constructor(name, power, image) {
    this.name = name;

    this.power = power;

    this.image = image;
  }

}

//array that holds cards that block
const garyOakDeck = []

//blocker cards to be initialized
let newBlockCard = new garyOakCard("Psyduck", 300, "garyOakCard");
let newBlockCard1 = new garyOakCard("Squirtle", 200, "garyOakCard");
let newBlockCard2 = new garyOakCard("Mew II", 40, "garyOakCard");
let newBlockCard4 = new garyOakCard("Togepi", 20, "garyOakCard");


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
    const ashCardImage = cardInfoObj.image
    //tags text content set to card obj key values
    ashCardName.textContent = cardInfoObj.name;
    ashCardPower.textContent = cardInfoObj.power;

    ashCard.style.backgroundImage = "url(" + ashCardImage + ")"
    

    //append card obj info onto the card div: 
    ashCard.append(ashCardPower , ashCardName);






    // appends each created card onto the player hud
    document.querySelector('.deck-container-ash').append(ashCard);




    //on click, changes the poperties of the card div and sets card selector to true
    ashCard.addEventListener('click', (e) => {

      ashCard.style.border = "solid 3px blue"

      ashCard.id = "ash"

    })



  });




}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
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
    document.querySelector('.deck-container-gary').append(garyCard);
  

    //on click, changes the poperties of the card div and sets card selector to true
    garyCard.addEventListener('click', (e) => {

      garyCard.style.backgroundColor = "Green"

      garyCard.id = "gary"

   

    })





  });




}


