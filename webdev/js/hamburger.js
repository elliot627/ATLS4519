$(document).ready(function(){
	$(".navicon").click(function(e){
		e.preventDefault();
		$("nav").slideToggle(500);
	});
});