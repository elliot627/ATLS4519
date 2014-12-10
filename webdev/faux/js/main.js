$(document).ready(function(){
	$('.header').stickyNavbar();

	$('.navbar-nav li a').click(function(e){
		e.preventDefault();
	})

});