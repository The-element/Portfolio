// When the user scrolls down 50px from the top of the document, resize the header's font size
var screenSize = parseInt(window.screen.width);
var count = 30;
var progressCount = [1,2,3,4,5,6,7];
var className = [];

for(i=0; i < progressCount.length; i++){
    className = ".progress" + toString(progressCount[i+1]);
}

$(window).scroll(function(className) {
    scrollFunction();
    var hT = $(".progress").offset().top,
        hH = $(".progress").outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        setInterval(function(className){myTimer(className)},10);
    }
});

function scrollFunction() {
    if (screenSize > 767) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("header").style.background = "black";
            document.getElementById("header").style.height = "50px";
            //document.getElementById("logo-header").style.height = "30px";
            //document.getElementById("logo-header").style.paddingTop = "-35px";
            document.getElementById("header").style.fontSize = "14px";
        } else {
            document.getElementById("header").style.background = "transparent";
            document.getElementById("header").style.height = "60px";
            //document.getElementById("logo-header").style.height = "40px";
            //document.getElementById("logo-header").style.paddingTop = "-10px";
            document.getElementById("header").style.fontSize = "16px";
        }
    } else {
            document.getElementById("header").style.background = "black";
            document.getElementById("header").style.height = "60px";
            //document.getElementById("logo-header").style.height = "40px";
            //document.getElementById("logo-header").style.paddingTop = "-10px";
            document.getElementById("header").style.fontSize = "16px";
            document.getElementsByClassName("nav-item").style.background = "black";
    }
}

function myTimer(className) {
    for(i=0; i < className.length; i++){
        if(count < 50){
            document.getElementsByClassName(className[i]).style.width = count + "%";
            count += 0.5;
            document.getElementById("demo").innerHTML = Math.round(count) +"%";
        }else if (count > 99){
            $('.progress').css('width', count + "%");
            count = 0;
        }
    }
}
