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

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 3 ,
        margin : 12 ,
        loop : true,
        autoplay : true,
        autoplayTimeout : 5000000,
        Responsive : {
            0 : {
                items :2
            },
            768 : {
                items :3
            }
        },
        navigator,
        nav:true,
        navText: [$('.am-next'),$('.am-prev')]
    });
  }); 