$(document).ready(function(){
    "use strict";

    $(window).load(function() {
        $("#loading").delay(2500).fadeOut(900);
        
        $("#loading").fadeOut(900);
        
    })

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
        responsive:[
            {
                breakpoint: 575,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                
                }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                
                }
            },
            
            
        ]
    });

    $(".testi-slider").slick({
        arrows:true,
        autoplay: true ,
        slidesToShow: 1,
        slidesToScroll:1,
        asNavFor: '.testi-main',
        draggble:false ,
        prevArrow:'.testi-leftarrow',
        nextArrow:'.testi-rightarrow',
    });
    $(".testi-main").slick({
        arrows:false,
        autoplay: true ,
        slidesToShow: 3,
        slidesToScroll:1,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.testi-slider',
        focusOnSelect:true,
    });

    $(".brand-slider").slick({
        arrows:true,
        autoplay: true ,
        dots: false,
        slidesToShow: 5,
        slidesToScroll:1,
        centerMode: true,
        centerPadding: '0px',
        prevArrow:'.brand-leftarrow',
        nextArrow:'.brand-rightarrow',
        responsive:[
            {
                breakpoint: 575,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                
                }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                
                }
            },
            {
                breakpoint: 991,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                
                }
            }
        ]
    });
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
    
        if(scrolling > 600){
            $("#back-top").fadeIn();
        }else{
            $("#back-top").fadeOut();
        }
    
        if(scrolling > 500){
            $("nav").addClass("nav-fix");
        }else{
            $("nav").removeClass("nav-fix");
        }
    });
    $("#back-top").click(function(){
        $("html,body").animate({
            scrollTop: "0px" ,
        },1500);
    });

    // color swither

    var colorSheets = [
        {
            color: "black",
            title: "Switch to black",
            href: "./css/color-black.css"
        },
        {
            color: "red",
            title: "Switch to red",
            href: "./css/color-red.css"
        },
        {
            color: "green",
            title: "Switch to green",
            href: "./css/color-green.css"
        }
        
    ];
    
    ColorSwitcher.init(colorSheets);
    
})