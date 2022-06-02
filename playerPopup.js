
function PopUp(){
    document.getElementById('ac-wrapper').style.display="none"; 
}

const upPop = document.getElementById("ac-wrapper")
const closePop = document.getElementById("linktomouseover")
const closePopThree = document.getElementById("linktomouseover3")
const divForTrainer = document.getElementById("rightSide")

closePop.addEventListener('click', () => {
    upPop.style.display = "none"


    const newTrainerDiv = document.createElement("span")
    newTrainerDiv.textContent= "Trainer: Ash"
    divForTrainer.appendChild(newTrainerDiv)


})

closePopThree.addEventListener('click', () => {
    upPop.style.display = "none"


    const newTrainerDiv = document.createElement("span")
    newTrainerDiv.textContent= "Trainer: Paul"
    divForTrainer.appendChild(newTrainerDiv)

})




/*
$(document).ready(function(){
    setTimeout(function(){
       PopUp();
    },5000); // 5000 to load it after 5 seconds from page load
 });

 $(function() {
    $('#container').hover(function() {
        $('#container').addClass('hover1')
    }, function() {
        $('#container').removeClass('hover1')
    });
       $('#container2').hover(function() {
        $('#container2').addClass('hover2')
    }, function() {
        $('#container2').removeClass('hover2')
    });
    $('#container3').hover(function() {
        $('#container3').addClass('hover1')
    }, function() {
        $('#container3').removeClass('hover1')
    });
    $('#container4').hover(function() {
        $('#container4').addClass('hover1')
    }, function() {
        $('#container4').removeClass('hover1')
    });
}); */