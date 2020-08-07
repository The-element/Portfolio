// When the user scrolls down 50px from the top of the document, resize the header's font size
var screenSize = parseInt(window.screen.width);
var show = 0;

$(window).scroll(function() {
    scrollFunction();
});

/*Changes the style and height of the header*/
function scrollFunction() {
    if (screenSize > 767) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("header").style.background = "black";
            document.getElementById("header").style.height = "50px";
            document.getElementById("header").style.fontSize = "14px";
        } else {
            document.getElementById("header").style.background = "transparent";
            document.getElementById("header").style.height = "60px";
            document.getElementById("header").style.fontSize = "16px";
        }
    } else {
            document.getElementById("header").style.background = "black";
            document.getElementById("header").style.height = "60px";
            document.getElementById("header").style.fontSize = "16px";
            document.getElementsByClassName("nav-item").style.background = "black";
    }
}

/* Email.js API */
function sendFunction() {
    document.getElementById('myform').addEventListener('submit', function(event) {
        event.preventDefault();
        // generates the contact number value
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('gmail', 'portfolio', this).then(function(){ 
            alert("Sent!");
               myform.find("#submit").text("Send");
        }, function(err) {
               alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
              myform.find("button").text("Send");
        });
      return false;
    });
}