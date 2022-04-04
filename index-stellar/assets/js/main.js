/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Nav.

	$(document).scroll(function () {
		var $nav = $('#nav');
		var navtop = $('#nav')[0].getBoundingClientRect().top
		// console.log('aaa');
		if (navtop <= 20 && navtop > 0) {

		}
		else if (navtop == 0) {

			$nav.addClass('alt');
		} else {

			$nav.removeClass('alt');

		}

		// console.log($('#nav')[0].getBoundingClientRect().top);




	})

	var $nav = $('#nav');
	// Links.
	var $nav_a = $nav.find('a');
	var timer=null;
	document.addEventListener("click",function(){if(timer) {clearInterval(timer);timer=null;}})
	document.addEventListener("scroll",()=>function(){if(timer) {clearInterval(timer);timer=null;}})
	$nav_a
		.scrolly({
			speed: 1000,
			offset: function () { return $nav.height(); }
		})
		.on('click', function () {

			var $this = $(this);

			// External link? Bail.
			if ($this.attr('href').charAt(0) != '#')
				return;

			// Deactivate all links.
			$nav_a
				.removeClass('active')
				.removeClass('active-locked');

			// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
			$this
				.addClass('active')
				.addClass('active-locked');

		})
		.each(function () {

			var $this = $(this),
				id = $this.attr('href'),
				$section = $(id);

			// No section for this link? Bail.
			if ($section.length < 1)
				return;

			// Scrollex.
			$section.scrollex({
				mode: 'middle',
				initialize: function () {

					// Deactivate section.
					if (browser.canUse('transition'))
						$section.addClass('inactive');

				},
				enter: function () {

					// Activate section.
					$section.removeClass('inactive');
					if(timer) {clearInterval(timer);timer=null;}
					if (Math.round(window.pageYOffset) != Math.round($section[0].offsetTop)){
						timer = setInterval(function () {
							if (Math.round(window.pageYOffset) < Math.round($section[0].offsetTop)) {
								window.scrollBy(0, 20);
								if (Math.round(window.pageYOffset) >= Math.round($section[0].offsetTop)) {
									clearInterval(timer);
									timer=null;
								}
							} else {
								window.scrollBy(0, -20);
								if (Math.round(window.pageYOffset) <= Math.round($section[0].offsetTop)) {
									clearInterval(timer);
timer=null;
								}
							}
						}, 10);
					}
					// window.scrollTo(0,$section.offsetTop).scrolly({speed: 1000});
					// console.log($section[0].offsetTop);
					// No locked links? Deactivate all links and activate this section's one.
					if ($nav_a.filter('.active-locked').length == 0) {

						$nav_a.removeClass('active');
						$this.addClass('active');

					}

					// Otherwise, if this section's link is the one that's locked, unlock it.
					else if ($this.hasClass('active-locked'))
						$this.removeClass('active-locked');

				}
			});

		});
	// Scrolly.
	$('.scrolly').scrolly({
		speed: 1000
	});


})(jQuery);