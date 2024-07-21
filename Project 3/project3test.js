// function myFunc(){

let currentScore=10;    
let historyHighScore=0;



let randomNum=Math.trunc(Math.random()*100)+1;


console.log(randomNum);

let checkbtn=document.querySelector('.checkbtn');
let msg=document.querySelector('.result');
let userInput=document.querySelector('.guessing');
let currntScore=document.querySelector('.crrntscore');
let highScore=document.querySelector('.hscore')
let crrntsCore2=document.querySelector('.crrntscore2')
let highScore2=document.querySelector('.hscore2')
let msgerror=document.querySelector('.wrong')
let playagain=document.querySelector('.playagain')

const randNum = () => {
    randomNum = Math.trunc(Math.random()*100)+1;}


checkbtn.addEventListener('click',function(){
        

if(currentScore>0){
    if(Number(userInput.value)==randomNum){
        msg.textContent='You Win! The Correct Number was ' + parseFloat(randomNum) + '!';
        msg.style.color='green';
        currentScore=currentScore+1;
        currntScore.textContent=String(currentScore);
        // document.getElementById("toprow").classList.remove('mdlshow');    
        // document.getElementById("toprow").classList.add('mdlhide');
        document.getElementById("guessw").classList.remove('mdlshow');    
        document.getElementById("guessw").classList.add('mdlhide');
        document.getElementById("win").classList.remove('mdlhide');    
        document.getElementById("win").classList.add('mdlshow');
        if (historyHighScore<currentScore){
            highScore.textContent=currentScore}
        crrntsCore2.textContent=String(currentScore);
        highScore2.textContent=String(currentScore);
        

            
        }

    else{

        if(Number(userInput.value)>randomNum){
            msgerror.textContent='Number is too high, try again!';
            msgerror.style.color='red';
            currentScore=currentScore-1;
            currntScore.textContent=String(currentScore);
        }
       
        if(Number(userInput.value)<randomNum){
            msgerror.textContent='Number is too low, try again!';
            msgerror.style.color='red';
            currentScore=currentScore-1;
            currntScore.textContent=String(currentScore);
        }
    }

        }

}

)

checkbtn.addEventListener('click',function(){
    if(currentScore==0){
    if(Number(userInput.value)==randomNum){
        msg.textContent='Correct, You Win!';
        msg.style.color='green';
        currentScore=currentScore+1;
        currntScore.textContent=String(currentScore);
        if (historyHighScore<currentScore){
            highScore.textContent=currentScore}
        }
    }
}
)
   

// var addButton = document.getElementById('playagain');

playagain.addEventListener('click', addToDoItem)

function addToDoItem() {
    document.getElementById("win").classList.remove('mdlshow');    
    document.getElementById("win").classList.add('mdlhide');
    document.getElementById("guessw").classList.remove('mdlhide');    
    document.getElementById("guessw").classList.add('mdlshow');
    // document.getElementById("toprow").classList.remove('mdlhide');    
    // document.getElementById("toprow").classList.add('mdlshow');
    randNum();
    console.log(randomNum);
}


let reset=document.querySelector('.resetbtn');

reset.addEventListener('click', addToDoItem2)

function addToDoItem2() {
    location.reload();
}
