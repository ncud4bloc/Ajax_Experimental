/* -----  Functions  ----- */

/* -----  Function Calls  ----- */

$(function(){
    
    $('#titleBox').on('click',function(){
        
    // Begin Method 1: Load Using JavaScript
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            document.getElementById('insert').innerHTML = xhr.responseText;
        };
        xhr.open('GET', 'HTML/addMyResumeObjective.html', true);
        xhr.send(null);
    // End Method 1
        
    });

});