(function ($) {
	
	///// Section-1 CSS-Slider /////    
  // Auto Switching Images for CSS-Slider
  function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
  }

  var bannerTimer = setInterval(bannerSwitcher, 5000);

  $('nav .controls label').click(function() {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
  });


	
	jQuery(document).ready(function ($) {

		(function() {
	var slider = $('.slider'), 
		next, 
		prev, 
		stop,
		pause = $('.pause'),
		check = $('#checkbox'),
		switchlabel = $('.onoffswitch-label'),
		item = $('.slider .flex-item');
		check.prop('checked', true);
		speed = 4000, item,
		mySlide = setInterval(startSlider, speed);


next = function(el) {
	if (el.next().length > 0) {
		return el.next();
	} else {
		return item.first();
	}
};

prev = function(el) {
	if (el.prev().length > 0) {
		return el.prev();
	} else {
		return item.last();
	}
};

$('.toggle').on('click', function(e) {
		stopSlider();
	var el, i, j, new_item, ref;
		el = $('.active').removeClass('active');
	if ($(e.currentTarget).data('toggle') === 'next') {
		new_item = next(el);
		slider.removeClass('backward');
	} else {
		new_item = prev(el);
		slider.addClass('backward');
	}
		new_item.addClass('active').css('order', 1);
	for (i = j = 2, ref = item.length; 2 <= ref ? j <= ref : j >= ref; i = 2 <= ref ? ++j : --j) {
		new_item = next(new_item).css('order', i);
	}
		slider.removeClass('forward');
	return setTimeout((function() {
	return slider.addClass('forward');
	}), 50);
});

function startSlider() {
	var el, i, j, new_item, ref;
		el = $('.active').removeClass('active');
		new_item = next(el);
		slider.removeClass('backward');
		new_item.addClass('active').css('order', 1);
	for (i = j = 2, ref = item.length; 2 <= ref ? j <= ref : j >= ref; i = 2 <= ref ? ++j : --j) {
		new_item = next(new_item).css('order', i);
		//$('.info i').text(ref);
	}
		slider.removeClass('forward');
	return setTimeout((function() {
	return slider.addClass('forward');
	}), 50);
}
	switchlabel.click(function () {
	if (check.prop('checked')) {
		stopSlider();
		switchlabel.addClass('donot');
		$('.pause').hide();
	}
	else  {
	   check.prop('checked', true);
		mySlide = setInterval(startSlider, speed);
		$(this).addClass('stop');
		$(this).removeClass('start');
		switchlabel.removeClass('donot');$('.pause').show();


	}
});
slider.each(function() {
    function play() {
    if (switchlabel.hasClass("donot")) {pause.removeClass('look');return true}
   	else{ 
    switchlabel.addClass('stop');
	switchlabel.removeClass('start');
 	mySlide = setInterval(startSlider, speed);
 	pause.removeClass('look');
 	$('#checkbox').prop('checked', true); 
	}
	}
    function stop() { 
    stopSlider();
    pause.addClass('look'); 
    }
	slider.hover(stop, play);
});
function stopSlider() {
	check.prop('checked', false);
	clearInterval(mySlide);
	switchlabel.addClass('start');
	switchlabel.removeClass('stop');
}

}).call(this);

		setInterval(function () {
			moveRight();
		}, 3000);
	  
		var slideCount = $('#slider ul li').length;
		var slideWidth = $('#slider ul li').width();
		var slideHeight = $('#slider ul li').height();
		var sliderUlWidth = slideCount * slideWidth;
		
		$('#slider').css({ width: slideWidth, height: slideHeight });
		
		$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
		
		$('#slider ul li:last-child').prependTo('#slider ul');
	
		function moveLeft() {
			$('#slider ul').animate({
				left: + slideWidth
			}, 200, function () {
				$('#slider ul li:last-child').prependTo('#slider ul');
				$('#slider ul').css('left', '');
			});
		};
	
		function moveRight() {
			$('#slider ul').animate({
				left: - slideWidth
			}, 200, function () {
				$('#slider ul li:first-child').appendTo('#slider ul');
				$('#slider ul').css('left', '');
			});
		};
	
		$('a.control_prev').click(function () {
			moveLeft();
		});
	
		$('a.control_next').click(function () {
			moveRight();
		});
	
	});    
	
	
	
	$('.owl-carousel').owlCarousel({
	
		loop:true,
		margin: 30,
		nav: true,
		interval:2000,
		pagination: true,
		responsive: {
			0: {
				items: 1,
				
			},
			800: {
				items: 1,
				
			},
			1000: {
				items: 2,
				
			}
		}
	
	})


	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var box = $('.header-text').height();
		var header = $('header').height();

		if (scroll >= box - header) {
			$("header").addClass("background-header");
		} else {
			$("header").removeClass("background-header");
		}
	});

	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();


	// Menu Dropdown Toggle
	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('a[href*=\\#]:not([href=\\#])').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var targetHash = this.hash;
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				var width = $(window).width();
				if (width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);
				}
				$('html,body').animate({
					scrollTop: (target.offset().top)
				}, 700, 'swing', function () {
					window.location.hash = targetHash;
				});
				return false;
			}
		}
	});

	$(document).ready(function () {
		$('a[href^="#anasayfa"]').addClass('active');

		//smoothscroll
		$('.menu-item').on('click', function (e) {
			e.preventDefault();
			var athis = this;
			var target = this.hash,
				menu = target;
			var $target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 500, 'swing', function () {
				window.location.hash = target;
				$('.menu-item').removeClass('active');
				$(athis).addClass('active');
			});
		});

		$(window).scroll(function (event) {
			var scrollPos = $(document).scrollTop() + 80;

			if (scrollPos === 0) {
				$('a[href^="#anasayfa"]').addClass('active');
				return;
			}
			$('.menu-item').not('[href=""]').not('[href="javascript:;"]').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));

				if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
					$('.menu-item').removeClass("active");
					currLink.addClass("active");
				} else {
					currLink.removeClass("active");
				}
			});
		})
	});

	const Accordion = {
		settings: {
			// Expand the first item by default
			first_expanded: false,
			// Allow items to be toggled independently
			toggle: false
		},

		openAccordion: function (toggle, content) {
			if (content.children.length) {
				toggle.classList.add("is-open");
				let final_height = Math.floor(content.children[0].offsetHeight);
				content.style.height = final_height + "px";
			}
		},

		closeAccordion: function (toggle, content) {
			toggle.classList.remove("is-open");
			content.style.height = 0;
		},

		init: function (el) {
			const _this = this;

			// Override default settings with classes
			let is_first_expanded = _this.settings.first_expanded;
			if (el.classList.contains("is-first-expanded")) is_first_expanded = true;
			let is_toggle = _this.settings.toggle;
			if (el.classList.contains("is-toggle")) is_toggle = true;

			// Loop through the accordion's sections and set up the click behavior
			const sections = el.getElementsByClassName("accordion");
			const all_toggles = el.getElementsByClassName("accordion-head");
			const all_contents = el.getElementsByClassName("accordion-body");
			for (let i = 0; i < sections.length; i++) {
				const section = sections[i];
				const toggle = all_toggles[i];
				const content = all_contents[i];

				// Click behavior
				toggle.addEventListener("click", function (e) {
					if (!is_toggle) {
						// Hide all content areas first
						for (let a = 0; a < all_contents.length; a++) {
							_this.closeAccordion(all_toggles[a], all_contents[a]);
						}

						// Expand the clicked item
						_this.openAccordion(toggle, content);
					} else {
						// Toggle the clicked item
						if (toggle.classList.contains("is-open")) {
							_this.closeAccordion(toggle, content);
						} else {
							_this.openAccordion(toggle, content);
						}
					}
				});

				// Expand the first item
				if (i === 0 && is_first_expanded) {
					_this.openAccordion(toggle, content);
				}
			}
		}
	};

	(function () {
		// Initiate all instances on the page
		const accordions = document.getElementsByClassName("accordions");
		for (let i = 0; i < accordions.length; i++) {
			Accordion.init(accordions[i]);
		}
	})();



	// Home seperator
	if ($('.home-seperator').length) {
		$('.home-seperator .left-item, .home-seperator .right-item').imgfix();
	}


	// Home number counterup
	if ($('.count-item').length) {
		$('.count-item strong').counterUp({
			delay: 10,
			time: 1000
		});
	}


	// Page loading animation
	$(window).on('load', function () {
		if ($('.cover').length) {
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function () {
			setTimeout(function () {
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function () {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function () {
			if (width < 992) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);