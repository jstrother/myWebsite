$(document).ready(function() {
	console.log('ready');

	$('#headers').show();
	$('#about').hide();
	$('#portfolio').hide();
	$('#contact').hide();

	// velocityJS code for some animations
	$('.about-link').on('click', function() {
		$('#headers').hide();
		$('#portfolio').hide();
		$('#contact').hide();
		$('#about').velocity('fadeIn', {duration: 1500});
	});
	$('.portfolio-link').on('click', function() {
		$('#headers').hide();
		$('#about').hide();
		$('#contact').hide();
		$('#portfolio').velocity('fadeIn', {duration: 1500});
	});
	$('.contact-link').on('click', function() {
		$('#headers').hide();
		$('#portfolio').hide();
		$('#about').hide();
		$('#contact').velocity('fadeIn', {duration: 1500});
	});

	// code to handle resizing and appearance-ish of nav bar
	$(window).on("load resize",function(e) {
	  let more = document.getElementById("js-centered-more");

	  if ($(more).length > 0) {
	    let windowWidth = $(window).width();
	    let moreLeftSideToPageLeftSide = $(more).offset().left;
	    let moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

	    if (moreLeftSideToPageRightSide < 330) {
	      $("#js-centered-more .submenu .submenu").removeClass("fly-out-right");
	      $("#js-centered-more .submenu .submenu").addClass("fly-out-left");
	    }

	    if (moreLeftSideToPageRightSide > 330) {
	      $("#js-centered-more .submenu .submenu").removeClass("fly-out-left");
	      $("#js-centered-more .submenu .submenu").addClass("fly-out-right");
	    }
	  }

	  let menuToggle = $("#js-centered-navigation-mobile-menu").unbind();
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

	// code for modal
	$(function() {
	  $(".all-modals").on("change", function() {
	    if ($(this).is(":checked")) {
	      $("body").addClass("modal-open");
	    } else {
	      $("body").removeClass("modal-open");
	    }
	  });
	
	  $(".modal-fade-screen, .modal-close").on("click", function() {
	    $(".modal-state:checked").prop("checked", false).change();
	  });
	
	  $(".modal-inner").on("click", function(e) {
	    e.stopPropagation();
	  });
	});
	
	// code for email contact form
	$('#contact-submit').click(function() {
		let name = $('#name').val();
		let email = $('#email').val();
		let subject = $('#subject').val();
		let message =$('#message').val();
		$('#text').text('Sending email... Please wait');
		$.get('http://www.jimstrother.com:3000/send', {
			to: 'strotherwebdev@gmail.com',
			from: email,
			name: name,
			subject: subject,
			message: message
		}, function(data) {
			if (data == 'sent') {
				$('#text').empty().html('Email has been sent!');
			}
		});
	});
});