const container = document.querySelector('.container') ;

const items = document.querySelectorAll('button') ; 

const oponent = document.querySelector('.oponent') ;

const result = document.querySelector('.result') ;

function oponentChoise (ev) {
   if (ev.target.closest('.button')) {
   const chosenIndex = Math.round((Math.random() * (items.length -1))) ;
   oponent.innerText = items[chosenIndex].innerText ;
   return oponent.innerText ;
}
}

function comprasion(ev) {
    if (ev.target.closest('.button')) {
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
            }
}
}


container.addEventListener('click' , (event) => {oponentChoise(event)}) ;
container.addEventListener('click' , (event) => {comprasion(event)}) ;

