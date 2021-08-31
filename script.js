const container = document.querySelector('.container') ;

const items = document.querySelectorAll('button') ; 

const oponent = document.querySelector('.oponent') ;

const result = document.querySelector('.result') ;

let roundNumber = document.querySelector('.roundnumber') ;

let winscore = document.querySelector('.winscore') ;
let losesscore = document.querySelector('.losesscore') ;
let drawscore = document.querySelector('.drawscore') ;

let counter = 0 ;

let drawCounter = 0 ;
let winCounter = 0 ;
let losesCounter = 0 ;

function oponentChoise (ev) {
   if (ev.target.closest('.button')) {
   const chosenIndex = Math.round((Math.random() * (items.length -1))) ;
   oponent.innerText = items[chosenIndex].innerText ;
   comprasion(ev) ;
//    return oponent.innerText ;
}
}

function comprasion(ev) {
    // if (ev.target.closest('.button')) {
    const weap = ev.target.dataset.value ;
        if (weap === 'stone') {            
            if (oponent.innerText === 'stone' )  result.innerText = "draw" ;
            if (oponent.innerText === 'paper' )  result.innerText = "you lose" ;
            if (oponent.innerText === 'scissors' ) result.innerText = "you win" ;
            } else if(weap === 'paper' ){
                if (oponent.innerText === 'stone' ) result.innerText = "you win" ;
                if (oponent.innerText === 'paper' ) result.innerText = "draw" ;
                if (oponent.innerText === 'scissors' ) result.innerText = "you lose" ;
                    }else if(weap ==='scissors') {
                        if (oponent.innerText === 'stone' ) result.innerText = "you lose" ;
                        if (oponent.innerText === 'paper' ) result.innerText = "you win" ;
                        if (oponent.innerText === 'scissors' ) result.innerText = "draw" ;
            // }
            
        }
        
        roundCounter() ;
        scoreCounter() ;
}

function roundCounter(){
        counter+=1 ;
        roundNumber.innerText=counter ;
}

function scoreCounter(){
    if (result.innerText ==="you lose") {
        losesCounter+=1 ;
        losesscore.innerText=losesCounter ;
    }
    if (result.innerText ==="you win"){
        winCounter+=1 ;
        winscore.innerText=winCounter ;
    } 
    if (result.innerText ==="draw") {
        drawCounter+=1
        drawscore.innerText=drawCounter ;
    }

}


container.addEventListener('click' , (event) => {oponentChoise(event)}) ;

// container.addEventListener('click' , (event) => {comprasion(event)}) ;
// container.addEventListener('click' , roundCounter ) ;

