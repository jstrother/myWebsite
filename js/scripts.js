$(document).ready(function() {
	console.log('ready');

	$('#headers').hide();
	$('#about').show();
	$('#portfolio').hide();

	// velocityJS code for some animations
	// $('#about-link').on('click', function() {
	// 	$('#headers').hide();
	// 	$('#portfolio').hide();
	// 	$('#about').velocity('fadeIn', {duration: 1500})
	// });
	// $('#portfolio-link').on('click', function() {
	// 	$('#headers').hide();
	// 	$('#about').hide();
	// 	$('#portfolio').velocity('fadeIn', {duration: 1500})
	// });

	// code to handle resizing and appearance-ish of nav bar
	$(window).on("load resize",function(e) {
	  var more = document.getElementById("js-centered-more");

	  if ($(more).length > 0) {
	    var windowWidth = $(window).width();
	    var moreLeftSideToPageLeftSide = $(more).offset().left;
	    var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

	    if (moreLeftSideToPageRightSide < 330) {
	      $("#js-centered-more .submenu .submenu").removeClass("fly-out-right");
	      $("#js-centered-more .submenu .submenu").addClass("fly-out-left");
	    }

	    if (moreLeftSideToPageRightSide > 330) {
	      $("#js-centered-more .submenu .submenu").removeClass("fly-out-left");
	      $("#js-centered-more .submenu .submenu").addClass("fly-out-right");
	    }
	  }

	  var menuToggle = $("#js-centered-navigation-mobile-menu").unbind();
	  $("#js-centered-navigation-menu").removeClass("show");

	  menuToggle.on("click", function(e) {
	    e.preventDefault();
	    $("#js-centered-navigation-menu").slideToggle(function(){
	      if($("#js-centered-navigation-menu").is(":hidden")) {
	        $("#js-centered-navigation-menu").removeAttr("style");
	      }
	    });
	  });
	});
});