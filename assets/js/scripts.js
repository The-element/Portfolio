// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.background = "black";
    document.getElementById("header").style.height = "40px";
    document.getElementById("logo-header").style.height = "20px";
    document.getElementById("logo-header").style.marginTop = "-20px";
    document.getElementById("header").style.fontSize = "14px";
  } else {
    document.getElementById("header").style.background = "transparent";
    document.getElementById("header").style.height = "60px";
    document.getElementById("logo-header").style.height = "40px";
    document.getElementById("logo-header").style.marginTop = "-40px";
    document.getElementById("header").style.fontSize = "16px";
  }
}