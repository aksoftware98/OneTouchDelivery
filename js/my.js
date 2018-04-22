 $(document).ready(function() {

    $(window).scroll(function() {

      if($(this).scrollTop() > 100) { 
          $(".navbar").addClass("solid")
      } else {
          $(".navbar").removeClass("solid");
      }
    });
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:7,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[3000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })


    $('#popUp').click(function () {
      $('.overlay-pop').fadeIn(1000);

    });
    $('.popUp .close, #closePopUp').click(function() {
      $('.overlay-pop').fadeOut(1000);

    })

});

