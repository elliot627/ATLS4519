$(document).ready(function(){
  $('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

  smoothScroll.init({
  	easing: 'easeInOutCubic',
  	updateURL: false,
  	speed: 800
  });

});
var epochToBirth = 772702259;

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var getAge = function(){
	var nowSec = Math.floor(Date.now()/1000);
	var stringified = numberWithCommas(nowSec - epochToBirth);
	$('#age').text(stringified);
}

window.setInterval(getAge,1000);