// When the user scrolls down 50px from the top of the document, resize the header's font size
var screenSize = parseInt(window.screen.width);
var show = 0;

$(window).scroll(function() {
    scrollFunction();
    var hT = $(".progress").offset().top,
        hH = $(".progress").outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (show < 1 && wS > (hT+hH-wH)){
        myTimer();
        show++;
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

function myTimer() {
    var progressCount = [80,60,75,90,50,60,70];
    var className = ["progress0", "progress1", "progress2", "progress3", "progress4", "progress5", "progress6"];
    var demoName = ["demo0", "demo1", "demo2", "demo3", "demo4", "demo5", "demo6"];
    var count = 30;

    setInterval(function(){
        for(i=0; i<className.length; i++){
            var cssClass = className[i];
            var demoId = demoName[i];
            var progressNr = progressCount[i];

            if(count < progressNr){
                document.getElementById(cssClass).style.width = count + "%";
                //$(cssClass).css('width', count + "%");
                count += 1;
                document.getElementById(demoId).innerHTML = Math.round(count) +"%";
            }else if (count > 99){
                //document.getElementsByClassName(cssClass).style.width = count + "%";
                $(cssClass).css('width', count + "%");
                count = 30;
            }
        }
    },10);
};
