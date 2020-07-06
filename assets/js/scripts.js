// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
var screenSize = parseInt(window.screen.width);

function scrollFunction() {
    if (screenSize > 767) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("header").style.background = "black";
            document.getElementById("header").style.height = "50px";
            document.getElementById("logo-header").style.height = "30px";
            document.getElementById("logo-header").style.marginTop = "-35px";
            document.getElementById("header").style.fontSize = "14px";
        } else {
            document.getElementById("header").style.background = "transparent";
            document.getElementById("header").style.height = "60px";
            document.getElementById("logo-header").style.height = "40px";
            document.getElementById("logo-header").style.marginTop = "-10px";
            document.getElementById("header").style.fontSize = "16px";
        }
    } else {
            document.getElementById("header").style.background = "black";
            document.getElementById("header").style.height = "60px";
            document.getElementById("logo-header").style.height = "40px";
            document.getElementById("logo-header").style.marginTop = "-10px";
            document.getElementById("header").style.fontSize = "16px";
    }
}