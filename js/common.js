$(document).ready(function() {

	let headerSlider = $('.header-slider');
	let eventsSlider = $('.events__content');
	let objectImgSlider = $('.object__image');
	let objectInfoSlider = $('.object__info');

	headerSlider.slick({
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		speed: 2000,
		cssEase: 'ease-in-out'
	});

	eventsSlider.slick({
		slidesToShow: 2,
		centerMode: true,
		centerPadding: '200px'
	});
	let currentOutput = $('.slides-num__current');
	let generalOutput = $('.slides-num__general');

	objectImgSlider.on('init reInit afterChange', function (event, slick, currentSlide) {
		let i = (currentSlide ? currentSlide : 0) + 1;    	
    	
    	currentOutput.text(`00${i}`);    	
    	
    	generalOutput.text(`00${slick.slideCount}`);
	});

	objectImgSlider.slick({
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		speed: 1000,
		cssEase: 'ease-in-out',
		asNavFor: $('.object__info')
	});

	

	objectInfoSlider.slick({
		slidesToShow: 1,
		fade: true,
		asNavFor: $('.object__image'),
		speed: 1000,
	});


	$('.menu-toggle').on('click', function() {
		$('body').toggleClass('no-scroll');
		$('.modal-menu').toggleClass('modal_visible');

	});

	$('.modal_close').on('click', function() {
		$('.modal').removeClass('modal_visible');
		$('body').removeClass('no-scroll');
	});





});