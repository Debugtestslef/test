/// <reference path="zepto.min.js" />
/// <reference path="touch.js" />
/// <reference path="touch-0.2.14.min.js" />


//解决zepto在ios下滑动失效的问题
document.addEventListener('touchmove', function (event) {
    event.preventDefault();
}, false);
var i = 0;
$(".container>div").children().hide();
$('.container>div').eq(0).children().show();
$('.sa').swipeUp(function () {
    if ($(this).index()==4) {
        return false;
    }
    $(this).addClass("up").children().hide().parent().next().removeClass("down").children().show();
});
//向下
$('.sa').swipeDown(function () {
    if ($(this).index()==0) {
        return false;
    }
    $(this).addClass("down").children().hide().parent().prev().removeClass("up").children().show();
})
//音乐控制
touch.on(".musiclogo", "touchstart", function () {
    var audio = document.querySelector("audio");
    var mu = document.querySelector(".musiclogo")
    if (audio.paused) {
        audio.play();
        //            播放
        mu.style.animationPlayState = "running";
        //          CSS中的暂停语法  animation-play-state: paused|running;
    } else {
        audio.pause();
        //            暂停
        mu.style.animationPlayState = "paused";
    }
})