$(document).ready(function() {

	
    


	$(document).scroll(function(){
	    if( $(document).scrollTop() - $('header').offset().top > 400) {
	    	$('.page-top').addClass('page-top_visible');      

	    } else {
	    	$('.page-top').removeClass('page-top_visible');
	    }
	});

	$('.page-top').mPageScroll2id();

	let headerSlider = $('.heade2r-slider');
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
		swipe: false,
		responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,

			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '20px',
				swipe: true
			}
		}]
	});

	$('.events-next').on('click', function() {		
		eventsSlider.slick('slickNext');		
	});

	$('.events-prev').on('click', function() {
		eventsSlider.slick('slickPrev');
	
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
		speed: 2000,
		infinite: true,
		cssEase: 'ease-in-out',
		asNavFor: $('.object__info')
	});

	

	objectInfoSlider.slick({
		slidesToShow: 1,
		fade: true,
		asNavFor: $('.object__image'),
		speed: 2000,
	});

	


	 



	

	let searchButton = $('.search');
	let searchModal = $('.modal-search');
	let feedbackButton = $('.feedback');
	let feedbackModal = $('.modal-feedback');
	let modalClose = $('.modal_close');

	searchButton.on('click', function(e) {
		e.preventDefault();
		$('body').addClass('no-scroll');
		searchModal.toggleClass('modal_visible');
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


		

	




	$('.catalog__more').on('click', function(e) {
		e.preventDefault();
		let calcTable = $(this).parent('.catalog__info').parent('.catalog__item').find('.catalog__calc').parent('.table-container');
			$(this).toggleClass('catalog__more_active');
			calcTable.slideToggle(300);
		
	});

	


/**** Блок Продукт ****/

	let productItem = $('.product__item');


	productItem.on('mouseover', function() {
		let productImage = $(this).find('a').find('img');		
		let productViewItem = $('.product__image-screen');
		let productViewOutput = $('.product__image-container');


		if (productImage) { 
			return dataCopy(productImage, productViewItem, productViewOutput);			
		} else {
			return false;
		}		
	});



	function dataCopy(listImg, viewItem, viewOutput) {	
		viewOutput.find('.product__image-screen img').fadeOut(300).remove(200);	
		
		listImg.clone().appendTo(viewItem).fadeIn(300);
		

		

		

	}

/**** Блок Продукт ****/

	let menuSubLink = $('li.carret');
	let subMenuContainer = $('.modal-menu__submenu');

	
	if ($(window).on)
		
	menuSubLink.on('click, mouseover', function(e) { 
		e.preventDefault();						
		subMenuContainer.find('ul').remove();
		menuSubLink.removeClass('active');
		$(this).toggleClass('active');					
		$(this).find('ul').clone().appendTo(subMenuContainer);	
		
	});

	

	$('.carret-open').on('click', function(e) {
		e.preventDefault();
		$('li.carret').addClass('active');
		$('li.carret').find('ul').clone().appendTo(subMenuContainer);
		$('body').toggleClass('no-scroll');
		$('.modal-menu').toggleClass('modal_visible');		
		menuItemAnim.restart(2);
		
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


	// Params
let mainSliderSelector = '.main-slider',
    navSliderSelector = '.nav-slider',
    interleaveOffset = 0.5;

// Main Slider
let mainSliderOptions = {
      loop: true,
      speed:3000,
      autoplay:{
        delay:3000
      },
      loopAdditionalSlides: 10,
      grabCursor: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function(){
          this.autoplay.stop();
        },
        imagesReady: function(){
          this.el.classList.remove('loading');
          this.autoplay.start();
        },
        slideChangeTransitionEnd: function(){
          let swiper = this,
              captions = swiper.el.querySelectorAll('.caption');
          for (let i = 0; i < captions.length; ++i) {
            captions[i].classList.remove('show');
          }
          swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
        },
        progress: function(){
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress,
                innerOffset = swiper.width * interleaveOffset,
                innerTranslate = slideProgress * innerOffset;
           
            swiper.slides[i].querySelector(".slide-bgimg").style.transform =
              "translateX(" + innerTranslate + "px)";
          }
        },
        touchStart: function() {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function(speed) {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-bgimg").style.transition =
              speed + "ms";
          }
        }
      }
    };
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);



	


});