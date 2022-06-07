(function(window , document){
         'use strict'

var $start = document.querySelector('[data-button="start"]');  
console.log($start, 'butao de inicio !!!'); 
       
var $stop = document.querySelector('[data-button="Stop"]'); 
console.log($stop, 'button de stop'); 
       
var $reset = document.querySelector('[data-button="Reset"]');  
console.log($reset , 'buttao de reset');    

var $time = document.querySelector('data-button="timer"'); 
console.log($time); 

var interval ;



// $start.addEventListener('click', function() {
//    $time.value = +$time.value + 1 ;
//    setTimeout(startTimer, 1000); 
// } , false);


$start.addEventListener('click' , startTimer, false); 
 function startTimer(){ 
   $time.value = +$time.value + 1 ; 
   setTimeout(startTimer , 1000); 
} 


$reset.addEventListener('click' , function() {} , false ); 

$stop.addEventListener('click' , function() {} , false ); 


})(window , document)
