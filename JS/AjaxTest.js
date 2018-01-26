/* -----  Functions  ----- */

/* -----  Function Calls  ----- */

$(function(){
    
    $('#titleBox').on('click',function(){
        
        /* This is where my Ajax code goes */
        var note1 = '<p>'
        var note2 = 'This is where my Ajax code goes</p></ br>';
        var note3 = note1 + note2;
        $('.testItemBox').html(note3);
        for(var i = 0; i < 18; i++){
            note1 += '......';
            note3 = note1 + note2;
            $('.testItemBox').append(note3); 
        }
        /* This is where my Ajax code goes */
        
    });

});