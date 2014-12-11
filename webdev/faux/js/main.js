$(document).ready(function(){
	$('.header').stickyNavbar();

	$('.navbar-nav li a').click(function(e){
		e.preventDefault();
	});
	
	$('#title').fitText(1);
	$('#subtitle').fitText(3);

});