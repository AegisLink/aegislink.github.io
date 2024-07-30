let tip = prompt('Please enter the bill amount to calculate tip.');

if (tip > 30 && tip < 300){
    console.log("The tip amount for $" + tip + " is $" + (tip * .15) + "\n" +"Total bill will be $" + (tip * 1.15).toFixed(2))
}
else {
    console.log("The tip amount for $" + tip + " is $" + (tip * .20) + "\n" +"Total bill will be $" + (tip * 1.2).toFixed(2))

}

var modal = document.getElementById("mtable");
var btn = document.getElementById("opentable");

var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];

btn.onclick = function() {
  modal.style.display = "block";}

span1.onclick = function() {
  modal.style.display = "none";}

// IMAGE MODAL

var modal2 = document.getElementById("mimage");
var btn2 = document.getElementById("openimg");

btn2.onclick = function() {
  modal2.style.display = "block";}

span2.onclick = function() {
  modal2.style.display = "none";}

// FORM MODAL

var modal3 = document.getElementById("mform");

var btn3 = document.getElementById("openform");

btn3.onclick = function() {
  modal3.style.display = "block";}

span3.onclick = function() {
  modal3.style.display = "none";}

window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";}
    if (event.target == modal2) {
        modal2.style.display = "none";}
    if (event.target == modal) {
        modal.style.display = "none";}  
    }
