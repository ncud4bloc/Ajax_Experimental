/* -----  Functions  ----- */

/* -----  Function Calls  ----- */

$(function(){
    
    $('#titleBox').on('click',function(){
        
        var xhr = new XMLHttpRequest();
        
        // Begin Method 1: Load HTML Data Using JavaScript
            /*
            xhr.onload = function(){
                document.getElementById('insert').innerHTML = xhr.responseText;
            };
            xhr.open('GET', 'HTML/addMyResumeObjective.html', true);
            */
        // End Method 1
        
        // Begin Method 2: Load JSON Data Using JavaScript
            xhr.onload = function(){
                responseObject = JSON.parse(xhr.responseText);
                var newContent = '';
                newContent += '<div class="' + responseObject.styles + '" id="' + responseObject.id + '">';
                newContent += '<p>' + responseObject.myMessage + '</p>';
                newContent += '</div>';
                document.getElementById('insert').innerHTML = newContent;
            };
            xhr.open('GET', 'JSON/addMyResumeObjective.json', true);
        // End Method 2
        
        
        
        
        
        
        
        
        
        
        
        
        
        xhr.send(null);
    
        
    });

});