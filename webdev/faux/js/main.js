$(document).ready(function(){
	$('.header').stickyNavbar();

	$('a').click(function(e){
		e.preventDefault();
	});

	$('#title').fitText(1);
	$('#subtitle').fitText(3);


	smoothScroll.init({
	  	easing: 'easeInOutCubic',
	  	updateURL: false,
	  	speed: 800
  	});

  	wow = new WOW({
		offset: 100
	});

	wow.init();
});