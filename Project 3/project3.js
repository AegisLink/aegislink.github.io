// Math.random()


// // console.log(Math.random()*100);
// // console.log(Math.random()*100);
// // console.log(Math.random()*100);
// // console.log(Math.random()*100);
// // console.log(Math.random()*100);
// // console.log(Math.random()*100);
// // console.log(Math.random()*100);

// // console.log(Math.trunc(Math.random()*100))
// // console.log(Math.trunc(Math.random()*100))
// // console.log(Math.trunc(Math.random()*100))
// // console.log(Math.trunc(Math.random()*100))
// // console.log(Math.trunc(Math.random()*100))
// // console.log(Math.trunc(Math.random()*100))


// let randomNum=Math.trunc(Math.random()*100)+1;
// console.log(randomNum);

// let currentScore=10;
// let historyHighScore=0;


// let checkbtn=document.querySelector('.checkbtn');
// let resetbtn=document.querySelector('.resetbtn');
// let msg=document.querySelector('p');
// let userInput=document.querySelector('input');
// let crrntScore=document.querySelector('.crrntscore');

// // resetbtn.addEventListener('click',function()){
// // }





// checkbtn.addEventListener('click',function(){

//     if(currentScore>0){
//         if(Number(userInput.value)===randomNum){
//             msg.textContent='Congrats! you win the game!;'
//         if(currentScore>historyHighScore){
//             historyHighScore=currentScore
//         }


//     else{
//         if(Number(userInput.value)>randomNum){
//             msg.textContent='Wrong Number! Too high! Try Again.'
//             msg.style.color='red';
//             msg.style.fontSize='34px';
//             currentScore=currentScore-1;
//             currentScore.textContent=String(currentScore)
//     }

//     else{
//         if(Number(userInput.value)>randomNum){
//             msg.textContent='Wrong Number! Too high! Try Again.'
//             msg.style.color='red';
//             msg.style.fontSize='34px';
//             currentScore=currentScore-1;
//             currentScore.textContent=String(currentScore)
//     }
// }
// }
//     }
// }



let rondomNum=Math.trunc(Math.random()*100)+1;
console.log(rondomNum);

let currentScore=10;
let historyHighScore=0;

let checkbtn=document.querySelector('.checkbtn');
let reset=document.querySelector('.resetbtn');
let msg=document.querySelector('.result');
let userInput=document.querySelector('input');
let currntScore=document.querySelector('.crrntscore');
let guessing=document.querySelector('.guessing');
let win=document.querySelector('.correctwindow');
let lose=document.querySelector('.guesswindow');




// function fun(){
//     document.getElementById("resetform").reset();
//   } 


// function fun(){
//     document.getElementById("resetform").contentWindow.location.reload(true);}


// mdm slice array


checkbtn.addEventListener('click',function(){

if(currentScore>0){
    if(Number(userInput.value)===rondomNum){
        // msg.textContent='Congrats!  you win the game!';
        // msg.style.color='green';
        // msg.style.fontSize='44px';
       if (currentScore>historyHighScore){
        historyHighScore=currentScore
        
       } 



        
    }
    else{

        if(Number(userInput.value)>rondomNum){
            msg.textContent='Wrong number! too high! try  smaller value';
            msg.style.color='red';
            msg.style.fontSize='20px';
            currentScore=currentScore-1;
            // currntScore.textContent=String(currentScore);

        }
        if(Number(userInput.value)<rondomNum){
            msg.textContent='Wrong number! too low! Try lower value';
            msg.style.color='red';
            msg.style.fontSize='20px';
            currentScore=currentScore-1;
            // currntScore.textContent=String(currentScore);

        }
    }


}
    
}
   
)

let counter=0




