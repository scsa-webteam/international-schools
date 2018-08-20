$( document ).ready(function() {
	$('.slider').bxSlider({
	  mode: 'horizontal',
	  auto: false,
	  autoControls: false,
	  stopAutoOnClick: true
	});

	$(".accord > div:first-child").on( "click", function(e) {
		e.preventDefault();

		if($(this).find("span").text() == "+"){
			$(this).parent().find(".accbody").slideDown(500, function() {
			    //console.log($(this).parent().find("div:last").outerHeight())
			    /*var h = $(this).parent().find(".accbody").outerHeight();
			    $(this).attr("rel", h);
			    $("body").height($("body").height() + h);*/
			});			
			$(this).addClass("opened");
			$(this).find("span").text("-");
			
		} else {
			$(this).parent().find(".accbody").slideUp(100, function() {
			    //$("body").height($("body").height() - $(this).attr("rel"));
			});
			$(this).removeClass("opened");
			$(this).find("span").text("+");
		}
	});
	
});

function PopupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}