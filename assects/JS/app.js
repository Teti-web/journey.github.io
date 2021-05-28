$(function() {
    /*Fixed Header*/
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    
    /*Intro: https://kenwheeler.github.io/slick/*/
    
    let slider = $("#introSlider");
    
     slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      arrows: false,
      cssEase: 'linear'
});
    
    /*Smool-scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;
        
        nav.removeClass("show");
        
        $("html, body").animate({
            scrollTop: elementOffset - 80
        }, 700);
    });
    
    
    /*Nav Toggle*/
    
    navToggle.on("click", function(event) {
        event.preventDefault();
        
        nav.toggleClass("show");
        
    });
    
});