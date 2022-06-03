
function PopUp(){
    document.getElementById('ac-wrapper').style.display="none"; 
}

const upPop = document.getElementById("ac-wrapper")
const ashSelect = document.getElementById("container3")
const paulSelect = document.getElementById("container")
const userTrainer = document.getElementById("leftSide")
const otherTrainer = document.getElementById("rightSide")


function moveToLeft(span) {
   userTrainer.appendChild(span)
}

function moveToRight(span) {
   otherTrainer.appendChild(span)
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
