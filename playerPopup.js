
function PopUp(){
    document.getElementById('ac-wrapper').style.display="none"; 
}

const upPop = document.getElementById("ac-wrapper")
const ashSelect = document.getElementById("container3")
const paulSelect = document.getElementById("container")
//const userTrainer = document.getElementById("leftSide")
//const otherTrainer = document.getElementById("rightSide")
const userTrainerImg = document.getElementById("leftImage")
const userTrainerName = document.getElementById("leftTrainerName")
const otherTrainerImg = document.getElementById("rightSide")
const otherTrainerName = document.getElementById("rightTrainerName")


function moveToLeft() {
    userTrainerName.textContent = 


   // const newTrainerDiv = document.createElement("span")
   // newTrainerDiv.textContent= "Trainer: 1"
   // userTrainer.appendChild(newTrainerDiv)
}

function moveToRight() {


   // const newOtherTrainerDiv = document.createElement("span")
   // newOtherTrainerDiv.textContent= "Trainer: 2"
   // otherTrainer.appendChild(newOtherTrainerDiv)
}

ashSelect.addEventListener('click', () => {
    upPop.style.display = "none"
    moveToLeft(ashSelect)
    moveToRight(paulSelect)
})

paulSelect.addEventListener('click', () => {
    upPop.style.display = "none"
    moveToLeft(paulSelect)
    moveToRight(ashSelect)
    
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