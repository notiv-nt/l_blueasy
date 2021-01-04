
// debug css
// ;[].forEach.call(document.querySelectorAll("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)});

$(function() {

	var $hero = $('.hero');
	var $header = $('.main-header');

	$(window).scroll(function() {

		var height = $hero.innerHeight();
		var scrollTop = $(window).scrollTop();

		if (scrollTop > (height - 90)) {
			!$header.hasClass('fixed') && $header.addClass('fixed');
		} else {
			$header.hasClass('fixed') && $header.removeClass('fixed');
		}

	});

	$('.main-nav a').click(function(e) {
		e.preventDefault();

		if ($('.main-nav, .toggle-nav').hasClass('active'))
			$('.main-nav, .toggle-nav').toggleClass('active');

		var $this = $(this);
		var hash = $this.attr('href');

		try {
			var offset = $(hash).offset().top;
		} catch(e) { return }

		$('.main-nav a').removeClass('active');
		$this.addClass('active');

		$('html,body').stop().animate({
			scrollTop: offset
		}, 300);

	});

	$(document).on('click', '.toggle-nav', function(e) {
		e.preventDefault();

		$('.main-nav, .toggle-nav').toggleClass('active');
	});

	$('#Mixtit').mixItUp({});

});