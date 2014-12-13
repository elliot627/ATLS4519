$(document).ready(function(){
	$('.header').stickyNavbar();

	$('a').click(function(e){
		e.preventDefault();
	});

	$('#title').fitText(.81);
	$('#subtitle').fitText(1.85);


	smoothScroll.init({
	  	easing: 'easeInOutCubic',
	  	updateURL: false,
	  	speed: 800
  	});

  	wow = new WOW({
		offset: 100
	});

	wow.init();

	$('#submit').click(function(){
		var name = $('#first').val();
		name = name.toLowerCase();
		name = name.charAt(0).toUpperCase() + name.slice(1);
		$('#first').val("");
		$('#last').val("");
		$('#email').val("");
		$('#phone').val("");
		$('#device').val("");
		$('#repair').val("");
		if(name){
			alert("Thanks " + name +"! We'll get back to you in no time. \n\n\n Have an awesome day!")
		}
		else{
			alert("Whoops, looks like you forgot some stuff..");
		}
	});
});