$(document).ready(function() {

	let headerSlider = $('.header-slider');

	headerSlider.slick({
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 7000,
		arrows: false,
		speed: 2000,
		cssEase: 'ease-in-out',
		touchMove: false
	});

	$('.events__content').slick({
		slidesToShow: 2,
		centerMode: true,
		centerPadding: '200px'
	});


});