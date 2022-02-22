$(document).ready(function(){
    "use strict";

    $(".banner-slider").slick({
        autoplay: false ,
        dots: true,
        prevArrow:'.leftarrow',
        nextArrow:'.rightarrow',
    });

    $('.counter').counterUp({
        delay: 50,
        time: 5000
    });

    new VenoBox({
        selector: '.venobox'
    });
    $(".blog-slider").slick({
        arrows:true,
        autoplay: true ,
        dots: false,
        slidesToShow: 3,
        slidesToScroll:1,
        centerMode: true,
        centerPadding: '0px',
        prevArrow:'.blog-leftarrow',
        nextArrow:'.blog-rightarrow',
    });

    $(".testi-slider").slick({
        arrows:false,
        autoplay: true ,
        dots: false,
        slidesToShow: 1,
        slidesToScroll:1,
        // asNavFor: '.slider-nav',
        // prevArrow:'.blog-leftarrow',
        // nextArrow:'.blog-rightarrow',
    });
    $(".testi-main").slick({
        arrows:false,
        autoplay: true ,
        dots: false,
        slidesToShow: 3,
        slidesToScroll:1,
        centerMode: true,
        centerPadding: '0px',
        // asNavFor: '.slider-for',
        // prevArrow:'.blog-leftarrow',
        // nextArrow:'.blog-rightarrow',
    });

    
    
})