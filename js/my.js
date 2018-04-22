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

    // start rating 
/* Javascript */
 
$(function () {

    var value = $("#rateYo").data("value");
    $("#rateYo").rateYo({
      rating: value,
      readOnly: true
     
    });
    var value2 = $("#rateYo2").data("value");
    $("#rateYo2").rateYo({
      rating: value2,
      readOnly: true
     
    });
    var value3 = $("#rateYo3").data("value");
    $("#rateYo3").rateYo({
      rating: value3,
      readOnly: true
     
    });
    var value4 = $("#rateYo4").data("value");
    $("#rateYo4").rateYo({
      rating: value4,
      readOnly: true
     
    });
  });

});