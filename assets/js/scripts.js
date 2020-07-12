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
    var progressCount = [80,60,75,90,50,60,70,50,60,70,75,80,90,65];
    var className = ["progress0", "progress1", "progress2", "progress3", "progress4", "progress5", "progress6", "progress7", "progress8", "progress9", "progress10", "progress11", "progress12", "progress3"];
    var demoName = ["demo0", "demo1", "demo2", "demo3", "demo4", "demo5", "demo6", "demo7", "demo8", "demo9", "demo10", "demo11", "demo12", "demo13"];
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

//  The modal in timeline //
function storeChoice(id){
    var choice = id;
    var listOfJobs = ["hemfixare", "essveSverige", "buildFlow", "nordr", "24mx", "zooVillage", "riksbyggen1", "skellMontage", "budOchService", "riksbyggen2", "note", "handelshuset", "xzakt", "specma1", "specma2", "codeInst", "ntiSkolan", "abfStockholm", "euniqem", "AnderstorpsGymn"];

    for(i=0; i<listOfJobs.length; i++){
        if (choice === listOfJobs[i]){
            document.getElementById("hemfixModal").innerHTML(`<div class="modal-dialog modal-dialog-centered" role="document">
			    						<div class="modal-content">
				    						<div class="modal-header">
					    						<h5 class="modal-title" id="hemfixModalLabel">Hemfixare</h5>
						    					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
									    	</div>
										    <div class="modal-body">
											    <p>Technichan/handyman</p>
										    </div>
    									</div>
	    							</div>`)
        }
    }
}