$(function(){
    
    $('#titleBox').on('click',function(){
        
    // Used by Methods 1 & 2
        /* var xhr = new XMLHttpRequest(); */
        
    // Begin Method 1: Load HTML Data Using JavaScript
            /*
            xhr.onload = function(){
                document.getElementById('insert').innerHTML = xhr.responseText;
            };
            xhr.open('GET', 'HTML/addMyResumeObjective.html', true);
            */
    // End Method 1
        
    // Begin Method 2: Load JSON Data Using JavaScript
            /*
            xhr.onload = function(){
                responseObject = JSON.parse(xhr.responseText);
                var newContent = '';
                newContent += '<div class="' + responseObject.styles + '" id="' + responseObject.id + '">';
                newContent += '<p>' + responseObject.myMessage + '</p>';
                newContent += '</div>';
                document.getElementById('insert').innerHTML = newContent;
            };
            xhr.open('GET', 'JSON/addMyResumeObjective.json', true);
            */
    // End Method 2
        
    // Begin Method 3A: Load HTML Data Using jQuery .load() method
            /*
            $('#insert').load("HTML/ducati916.html" + ' #para2').hide().fadeIn(3000);
            */
    // End Method 3A
        
    // Begin Method 3B: Load HTML Data Using jQuery $.ajax() method
        
            $.ajax({
                type: "GET",
                url: "HTML/ducati916.html",
                timeout: 2000,
                beforeSend: function(){
                    $('#insert').append('<div id="load">Loading....</div>');
                    console.log('Loading....');
                },
                complete: function(){
                    $('#load').remove();
                    console.log('Loading Complete');
                },
                success: function(data){
                    $('#insert').html($(data).find('#para1')).hide().fadeIn(3000);    //jQuery .find() doesn't work
                    //$('#insert').html($(data)).hide().fadeIn(3000);
                    console.log('Data Transfer Successful');        
                },
                error: function(){
                    $('#insert').html('<div id="eMessage">Error.....file did not load correctly</div>');
                    console.log('Error Getting Data');
                }
            });
        
    // End Method 3B
        
        
    // Used by Methods 1 & 2
        /* xhr.send(null); */
    
        
    });

});