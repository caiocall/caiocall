"use strict";

window.addEventListener('load', function() {
//------------------------------------------------------------------------
//						NAVBAR SLIDE SCRIPT
//------------------------------------------------------------------------
$(window).scroll(function () {
    if ($(window).scrollTop() > $("nav").height()) {
        $("nav.navbar").addClass("show-menu");
    } else {
        $("nav.navbar").removeClass("show-menu");
        $("nav.navbar .navMenuCollapse").collapse({
            toggle: false
        });
        $("nav.navbar .navMenuCollapse").collapse("hide");
    }
});

//------------------------------------------------------------------------
//						NAVBAR HIDE ON CLICK (COLLAPSED) SCRIPT
//------------------------------------------------------------------------
$('.navbar li a').on('click', function() {
    $('.collapse.in').collapse('hide');
});

});

window.addEventListener('load', function() {
if (!navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|IEMobile/i)) {
	var skr = skrollr.init(
		{
		smoothScrolling: false
		, forceHeight: false
		, mobileDeceleration: 0.004
		}
		);
	}
});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-100
        }, 1000);
        return false;
      }
    }
  });
});
