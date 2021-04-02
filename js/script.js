'use strict'

$(function(){
    $('.burger-btn').on('click',function(){
        $('.menu-list').fadeToggle(300);
        $(this).toggleClass('cross');
        $('body').toggleClass('noscroll');
        return false;
    });
});

$('.menu-nav-list a[href]').on('click', function(event) {
    $('.menu-list').fadeToggle(300);
    $('.burger-btn').toggleClass('cross');
        $('body').toggleClass('noscroll');
        return false;
});

$('.menu-nav-list').on('click', function(event) {
    $('.menu-list').fadeToggle(300);
    $('.burger-btn').toggleClass('cross');
        $('body').toggleClass('noscroll');
        return false;
});

$(function(){
    $(".faq-title").on("click", function() {
        $(this).next().slideToggle();
        });
    });


    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1.4,
        spaceBetween: 30,
        breakpoints: {
            768:{
                slidesPerView: 2,
                spaceBetween: 50,
            },
            1200:{
                slidesPerView: 4,
                spaceBetween: 50,
            }
        },
        centeredSlides: true,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    AOS.init();


    $(function(){
        $("a[href^='#']:not([href='#'])").click(function(){

            var target = $($(this).attr("href")).offset().top;

            target -= 90;
            
            $("html, body").animate({scrollTop: target}, 500);
            return false;
        });
    });

    $(function(){
        $(".alert").hide();

        $("#submitBtn").click(function(){

            if($(".name").val() !== "" &&
            $(".mail").val() !== "" &&
            $(".text").val() !== "" &&
            $(".privacyCheck").prop('checked') === true){
                $(".alert").hide();
            }else {
                $(".alert").show();
                return false;
            }
        });
    });


    $(document).ready(function () {

        $('#form').submit(function (event) {
            var formData = $('#form').serialize();
            $.ajax({
            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfr7OjCNZZsjWW8x1p1VOP-H6M3vaPiXwN6G7Ao-6KkFBf8PQ/formResponse",
            data: formData,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                $(".end-message").slideDown();
                //window.location.href = "thanks.html";
                },
                200: function () {
                $(".false-message").slideDown();
                }
            }
            });
            event.preventDefault();
        });
    });