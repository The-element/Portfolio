// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
var screenSize = parseInt(window.screen.width);

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

// currentCount is a growing number;
// progress is the final number;
// You can change the number 300;

var currentCount = 150;
var progress = (currentCount / 300) * 100;
console.log(progress);
$(".progress-bar").width(progress + '%');
if (progress % 1 !== 0) {
  $(".progress-bar").text(progress.toFixed(1) + '%');
} else {
  $(".progress-bar").text(progress + '%');
}

