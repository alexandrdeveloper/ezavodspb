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
		slidesToShow: 3,
		infinite: false,
		arrows: false ,
		swipe: false
	});

	$('.events-next').on('click', function() {
		if (eventsSlider.hasClass('events__content_moved') == false) {
			eventsSlider.addClass('events__content_moved');
		} else {
			eventsSlider.slick('slickNext');
		}
	});

	$('.events-prev').on('click', function() {
		if (eventsSlider.hasClass('events__content_moved') == true) {
			eventsSlider.removeClass('events__content_moved');
		} else {
			eventsSlider.slick('slickPrev');
		}
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

	$('.events__content .slick-next').on('click', function() {
		eventsSlider.addClass('events__content_moved');
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