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
		slidesToShow: 4,
		infinite: false,
		arrows: false ,
		swipe: false,
		responsive: [
		{
			breakpoint: 1366,
			settings: {
				slidesToShow: 3,
			}
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 2,

			}
		}, {
			breakpoint: 368,
			settings: {
				slidesToShow: 1,
				swipe: true
			}
		}]
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

	let searchButton = $('.search');
	let searchModal = $('.modal-search');
	let feedbackButton = $('.feedback');
	let feedbackModal = $('.modal-feedback');
	let modalClose = $('.modal_close');

	searchButton.on('click', function(e) {
		e.preventDefault();
		modalUp(searchModal);
	}); 

	feedbackButton.on('click', function(e) {
		e.preventDefault();
		modalUp(feedbackModal);
	})

	modalClose.on('click', function(e) {
		e.preventDefault();
		$('body').removeClass('no-scroll');
		$('.modal').removeClass('modal_visible');
	});


	function modalUp(a) {
		$('body').addClass('no-scroll');
		a.toggleClass('modal_visible');
	}
	
	

	var menuItemAnim = gsap.timeline();
	menuItemAnim.staggerFrom('.modal-menu__nav-list>li', 1, {y: 200, opacity: 0, ease: 'power3.out'}, 0.1, "-=.75")
				.from('.modal-contacts', {duration: .5, x: '100%', ease: 'power3.out'}, "-=.7")
				.staggerFrom('.modal-contacts__image, .footer__contacts_modal, .theme-btn_fullw', 1, {y: 200, opacity: 0, ease: 'power3.out'}, 0.1, "-=.2");
	menuItemAnim.pause();

	$('.menu-toggle').on('click', function() {
		$('body').toggleClass('no-scroll');
		$('.modal-menu').toggleClass('modal_visible');		
		menuItemAnim.restart(2);
	});
	$('.menu_close').on('click', function() {	
		if (menuItemAnim.reversed()) {
		    menuItemAnim.play();
		} else {
		    menuItemAnim.reverse();
		}
		$('.modal-menu').removeClass('modal_visible');
		$('body').removeClass('no-scroll');
		
	});



	




	let productItem = $('.product__item').find('a');

	productItem.on('mouseover', function() {
		let productImage = $(this).find('img');		
		let productDisplay = $('.product__image-container');
		if (productImage) { 
			return dataCopy(productImage, productDisplay);			
		} else {
			return false;
		}	
		
	});

	function dataCopy(a, b) {
		b.find('img').remove();
		a.clone().appendTo(b);

	}

	let menuSubLink = $('.modal-menu__nav-list li');
	let subMenuContainer = $('.modal-menu__submenu');

	




	menuSubLink.on('mouseover', function() { 
		
		subMenuContainer.find('ul').remove();

		menuSubLink.find('a').removeClass('active');
		$(this).find('a').toggleClass('active');					
		$(this).find('ul').clone().appendTo(subMenuContainer);	
	});

	


	//$('.preloader').addClass('preloader_hidden');

	gsap.to('.preloader', {duration: 1, ease: 'power3.out', y: '-100%', delay: 3})

	var headerTl = gsap.timeline();

	headerTl.to('.preloader', {duration: 1, ease: 'power3.out', y: '-100%', delay: 1})
			.from('.header__logo', {duration: .5, ease: 'power3.out', opacity: 0, y: '20'}, "-=0.7")
			.from('.shopping', {duration: .5, ease: 'power3.out', opacity: 0, y: '20'}, "-=0.75")			
			.from('.header-info__main', {duration: .5, ease: 'power3.out', opacity: 0, y: '20'}, "-=.75")			
			.staggerFrom('.header-info__menu li', 1, {x: 200, opacity: 0, ease: 'power3.out'}, 0.1, "-=.75")
			.staggerFrom('.header-info__bottom a', 1, {x: -50, opacity: 0, ease: 'power3.out'}, 0.1, "-=.75");




});