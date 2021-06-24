$('.nav a').on('click',function(){
    var position = 
    $(this).parent().position();
    var width = $(this).parent().width();
    $('.nav a').removeClass("is-active");
    $(this).addClass("is-active");
    $(".nav .slide").css({
        opacity: 1,
        left: +position.left,
        width: width,
    });
});

var currentWidth = 
$(".nav").find("li:nth-child(2) a").parent("li").width();

var current = $("li:nth-child(2) a").position();

$(".nav .slide").css({
    left: +current.left,
    width:currentWidth,
});