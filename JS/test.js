var boxWidth = ($(window).width() - 610)/2;
var timeout;


/* -----  Functions  ----- */

function myInterval(){
    clearTimeout(timeout);
    timeout = setInterval(moveRt,5000);
};


/* -----  Function Calls  ----- */

$(function(){
    
    //myInterval();
   
    $('.testBox').on('click',function(){
        $('.testItemBox').text('Experimental code is entered here');
    });
    
});