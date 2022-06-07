(function(window , document){
         'use strict'

var $start = document.querySelector('[data-button="start"]');  
console.log($start, 'butao de inicio !!!'); 
       
var $stop = document.querySelector('[data-button="Stop"]'); 
console.log($stop, 'button de stop'); 
       
var $reset = document.querySelector('[data-button="Reset"]');  
console.log($reset , 'buttao de reset');    

var $timer = document.querySelector('[data-button="timer"]'); 
console.log($timer); 

var interval ;

$start.addEventListener( 'click' , startTimer , false);  //  START 
$stop.addEventListener( 'click' , stopTimer , false);   // PARAR 
$reset.addEventListener( 'click', resetTime ,  false);  // RESETAR 


function startTimer(){ 
    $timer.value = +$timer.value + 1 ; 
   interval =  setTimeout(startTimer , 1000); 
} 

function stopTimer () {
   clearTimeout(interval); 
}

function resetTime() {
  $timer.value = 0; 
  stopTimer();  
}

})(window , document);
