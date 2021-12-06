$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 2 ,
        margin : 12 ,
        // center : true,
        loop : true,
        autoplay : true,
        autoplayTimeout : 5000000,
        Responsive : {
            0 : {
                items :1,
                center : true,
            },
            768 : {
                items :1,
                center : true,
            }, 576 : {
                items :1,
                center : true,
            }
        },
        navigator,
        nav:true,
        navText: [$('.am-next'),$('.am-prev')]
    });
  }); 
  $(document).ready(function () {


    clearInterval( Leftt , 0)

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
        
        setInterval( Leftt , 100)
    };
    
    
});

