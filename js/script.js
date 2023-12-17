$(document).ready(function () {


	$('.insta-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		prevArrow: $('.insta-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.insta-slider-wrap .slider-navigation .slick-next'),
		responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 3,
				}
	    },
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 2,
				}
	    },
			{
				breakpoint: 521,
				settings: {
					slidesToShow: 1,
				}
	    }
	  ]
	});

	$('.reviews-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		prevArrow: $('.reviews-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.reviews-slider-wrap .slider-navigation .slick-next'),
	});

	$(".drop-menu").on("click", function (e) {
		e.preventDefault();
		$(".menu-wrap").addClass("open");
		$("body").addClass("overflow");
	});

	$(".close").on("click", function (e) {
		e.preventDefault();
		$(".menu-wrap").removeClass("open");
		$("body").removeClass("overflow");
	});

	$(".phone-number-input").inputmask({
		"mask": "+7 999-999-99-99",
		clearMaskOnLostFocus: false
	});

	$(".watch-video").on("click", function (e) {
		e.preventDefault();
		$("#video").show();
		$(".video-wrap .img-wrap").addClass("hidden");
		$("#video").trigger('play');
		$(".video-wrap .info").hide();
	});

	$(".learn-video").on("click", function (e) {
		e.preventDefault();
		$("#learn").show();
		$(".video-wrap .img-wrap").addClass("hidden");
		$("#learn").trigger('play');
		$(".video-wrap .info").hide();
	});

	$(".watch-video2").on("click", function (e) {
		e.preventDefault();
		$("#video2").show();
		$(".video-wrap2").addClass("hidden");
		$("#video2").trigger('play');
		$(".video-wrap2 .info").hide();
	});

	$(".tab-menu > li a").on("click", function (e) {
		e.preventDefault();
		$(".tab-menu > li").removeClass("active");
		$(this).closest("li").addClass("active");
		var index = $(this).closest("li").index();
		$(".tab-content").removeClass("active");
		$(".tab-content").eq(index).addClass("active");
	});

	$('.popup').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-fade'
	});

	$('.openVideo').magnificPopup({
		type: 'inline',
		callbacks: {
			close: function () {
				$(this.content).find('video')[0].load();
			}
		}
	});


	if ($(window).width() < 992) {
		$(".main-menu > li > a").on("click", function () {
			$(this).closest("li").find(".sub-menu").slideToggle();
		});
	}
	
		$('.scroll').smoothScroll({
		speed: 1000,
	});



});
