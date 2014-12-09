/* javascript documnent */

// smooth scroll
var scroll_to_element = function() {
  $('a[href*=#]:not([href=#])').click(function() {
  	//var offset = 70;
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
};

//define our main elements as variables
var $btn = $('.navicon a');
var $menu = $('nav');

//define toggle_mobile_menu function ahead of time as soon as possible
var toggle_mobile_menu = function() {


	//on window resize, check if width is greater or less than 565px
	$(window).on('resize', function() {

		// beware the mobile css starts at max-width:652
		// will be using ".default-open" only to keep track of if the menu has been toggled to display: none or not
		// if window width is less than 565 and menu has been given the class .default-open
		if ($(this).width() < 653 && $menu.hasClass('default-open')) {
			// hide the menu and remove default-open
			$menu.hide().removeClass('default-open');
		}
		// if the menu button is display none and menu is hidden and window width is greater than 565
		if ($btn.is(':hidden') && $menu.is(':hidden') && $(window).width() > 652) {
			// show the menu and add class .default-open to keep track of status
			$menu.show().addClass('default-open');
		} 

	}); // end resize function

	$btn.on('click', function(event) {
		event.preventDefault();
		$menu.slideToggle(350);
	});	

	//when the nav link is clicked
	//and if the window width is less than 653px
	//hide the menu
	$('nav a').on('click', function(event) {
		if ($(window).width() < 653) {
			$menu.hide();
		}
	});

};

$(document).ready(function() {

	//initialize the function toggle_mobile_menu when doc is ready
	toggle_mobile_menu();

	// initialize th scroll to element function 
	scroll_to_element();

}); //end document ready


