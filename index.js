let buttons = document.querySelector('.btn');
let ratingContainer = document.getElementsByClassName('.container');
let thanksContainer = document.getElementsByClassName('.container2');
let submit = document.querySelector('#submit-btn');
let rating = document.querySelector('#rating')

let choice = false;
buttons.addEventListener("click",e =>{
    if(e.target.matches('button')){
        let chosenRating = e.target.innerHTML;
        rating.textContent = chosenRating;
        choice =true;
    }
})

submit.addEventListener("click",e => {
    if (choice){
        ratingContainer.style.display = "none";
        thanksContainer.style.display = "block"   
     }
})


















