/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	$(document).ready(function () {
		console.log('ready');
	
		$('#headers').show();
		$('#about').hide();
		$('#portfolio').hide();
		$('#contact').hide();
	
		// velocityJS code for some animations
		$('.about-link').on('click', function () {
			$('#headers').hide();
			$('#portfolio').hide();
			$('#contact').hide();
			$('#about').velocity('fadeIn', { duration: 1500 });
		});
		$('.portfolio-link').on('click', function () {
			$('#headers').hide();
			$('#about').hide();
			$('#contact').hide();
			$('#portfolio').velocity('fadeIn', { duration: 1500 });
		});
		$('.contact-link').on('click', function () {
			$('#headers').hide();
			$('#portfolio').hide();
			$('#about').hide();
			$('#contact').velocity('fadeIn', { duration: 1500 });
		});
	
		// code to handle resizing and appearance-ish of nav bar
		$(window).on("load resize", function (e) {
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
	
			menuToggle.on("click", function (e) {
				e.preventDefault();
				$("#js-centered-navigation-menu").slideToggle(function () {
					if ($("#js-centered-navigation-menu").is(":hidden")) {
						$("#js-centered-navigation-menu").removeAttr("style");
					}
				});
			});
		});
	
		// code for modal
		$(function () {
			$(".all-modals").on("change", function () {
				if ($(this).is(":checked")) {
					$("body").addClass("modal-open");
				} else {
					$("body").removeClass("modal-open");
				}
			});
	
			$(".modal-fade-screen, .modal-close").on("click", function () {
				$(".modal-state:checked").prop("checked", false).change();
			});
	
			$(".modal-inner").on("click", function (e) {
				e.stopPropagation();
			});
		});
	
		// code for email contact form
		$('#contact-submit').click(function () {
			var name = $('#name').val();
			var email = $('#email').val();
			var subject = $('#subject').val();
			var message = $('#message').val();
			$('#text').text('Sending email... Please wait');
			$.get('http://www.jimstrother.com:3000/send', {
				to: 'strotherwebdev@gmail.com',
				from: email,
				name: name,
				subject: subject,
				message: message
			}, function (data) {
				if (data == 'sent') {
					$('#text').empty().html('Email has been sent!');
				}
			});
		});
	});

/***/ }
/******/ ]);
//# sourceMappingURL=scripts.js.map