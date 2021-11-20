$(document).ready(function () {


    clearInterval( Leftt() , 100)

    function Leftt() {

        $('.scrollLeft').animate({
           top: '90%',
           opacity:0
    
        },1500).animate({
            top: '82%',
            opacity:0
     
         },0).animate({
            top: '90%',
            opacity:1
          
         },1500)
        
        setInterval( Leftt() , 100)
    };
    
    
});