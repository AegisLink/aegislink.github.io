let randomNum=Math.trunc(Math.random()*100)+1;


console.log(randomNum);

let checkbtn=document.querySelector('.checkbtn');
let msg=document.querySelector('.result');
let userInput=document.querySelector('.guessing');
let currntScore=document.querySelector('.crrntscore');
let highScore=document.querySelector('.hscore');
let crrntsCore2=document.querySelector('.crrntscore2');
let highScore2=document.querySelector('.hscore2');
let msgerror=document.querySelector('.wrong');
let playagain=document.querySelector('.playagain');
let tryagain=document.querySelector('.tryagain');
let li=document.createElement('li')
let correct=document.querySelector('.correctnum')

const randNum = () => {
    randomNum=Math.trunc(Math.random()*100)+1;}

let currentScore=Number(currntScore.innerHTML);    
let historyHighScore=Number(highScore.innerHTML);
    
// console.log(currentScore);
// console.log(historyHighScore);

const newscores = () => {
    currentScore=Number(currntScore.innerHTML);    
    historyHighScore=Number(highScore.innerHTML);

}

const guessHistory=document.querySelector('.list')

const history=[];


let list = document.getElementById("list");


checkbtn.addEventListener('click',function(){
        

let data = history.splice(0);
let li = document.createElement('li');


if(currentScore>0){
    if(Number(userInput.value)==randomNum){
        msg.textContent='You Win! The Correct Number was ' + randomNum + '!';
        msg.style.color='white';
        currentScore=currentScore+1;
        currntScore.textContent=String(currentScore);
        document.getElementById("toprow").classList.remove('mdlshow');    
        document.getElementById("toprow").classList.add('mdlhidet');
        document.getElementById("guessw").classList.remove('mdlshow');    
        document.getElementById("guessw").classList.add('mdlhide');
        document.getElementById("win").classList.remove('mdlhide');    
        document.getElementById("win").classList.add('mdlshow');
        // console.log(currntScore.innerHTML);
        // console.log(highScore.innerHTML);
        newscores();
        crrntsCore2.textContent=String(currentScore);

        if (currentScore>historyHighScore){
            highScore.textContent=String(currentScore)
            highScore2.textContent=highScore.innerHTML;}
                    
        }

    else{
        if (userInput.value==""){
            msgerror.textContent='Please enter your guess!';
            msgerror.style.color='white';
        }

        
        else{
        if(Number(userInput.value)>randomNum){
            history.unshift(userInput.value)
            msgerror.textContent='Number is too high, try again!';
            msgerror.style.color='red';
            if(currentScore>0){
            currentScore=currentScore-1;}
            currntScore.textContent=String(currentScore);
            list.appendChild(li);
            li.innerText = history;

        }
       
        if(Number(userInput.value)<randomNum){
            history.unshift(userInput.value)

            msgerror.textContent='Number is too low, try again!';
            msgerror.style.color='red';
            if(currentScore>0){
            currentScore=currentScore-1;}
            currntScore.textContent=String(currentScore);
            list.appendChild(li);
            li.innerText = history;


            }

        if(currentScore==0){
            document.getElementById("toprow").classList.remove('mdlshow');    
            document.getElementById("toprow").classList.add('mdlhidet');    
            document.getElementById("guessw").classList.remove('mdlshow');    
            document.getElementById("guessw").classList.add('mdlhide');
            document.getElementById("lose").classList.remove('mdlhide');    
            document.getElementById("lose").classList.add('mdlshow');
            correct.textContent=randomNum
        }
        }
        }
        }

}
)



playagain.addEventListener('click', addToDoItem)

function addToDoItem() {
    document.getElementById("win").classList.remove('mdlshow');    
    document.getElementById("win").classList.add('mdlhide');
    document.getElementById("guessw").classList.remove('mdlhide');    
    document.getElementById("guessw").classList.add('mdlshow');
    document.getElementById("toprow").classList.remove('mdlhidet');    
    document.getElementById("toprow").classList.add('mdlshow');

    randNum();
    newscores();
    console.log(randomNum);
    msgerror.textContent='Guess the number';
    history.length=0
    list.textContent=[]

}

tryagain.addEventListener('click', addToDoItem)

function addToDoItem() {
    document.getElementById("lose").classList.remove('mdlshow');    
    document.getElementById("lose").classList.add('mdlhide');
    document.getElementById("guessw").classList.remove('mdlhide');    
    document.getElementById("guessw").classList.add('mdlshow');
    document.getElementById("toprow").classList.remove('mdlhidet');    
    document.getElementById("toprow").classList.add('mdlshow');
    document.getElementById("win").classList.remove('mdlshow');    
    document.getElementById("win").classList.add('mdlhide');


    randNum();
    newscores();

    currentScore=10;    
    currntScore.textContent=String(currentScore);

    console.log(randomNum);
    history.length=0
    list.textContent=[]

}

let reset=document.querySelector('.resetbtn');

reset.addEventListener('click', addToDoItem2)

function addToDoItem2() {
    location.reload();
}



