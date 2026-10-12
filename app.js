/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepinessStatEl = document.querySelector('#sleepiness-stat')
const playBtnEl = document.querySelector('#play')
const feedBTNEl = document.querySelector('#feed0')
const sleepBTNEl = document.querySelector('#sleep')
const gameMessageEl = document.querySelector('.stats-wrapper')
const resetBtnEl = document.querySelector('#restart')
/*-------------------------------- Constants --------------------------------*/
const myStudent = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
}




/*---------------------------- Variables (state) ----------------------------*/
let timer
let gameOver

/*-------------------------------- Functions --------------------------------*/
init()
render()
function init(){
    gameOver = false
    timer = setInterval(rungame() , 2000)
}

function rungame (){

}
function render(){
    
}

/*----------------------------- Event Listeners -----------------------------*/

