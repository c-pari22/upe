$(document).ready(function() {
	// Scroll animation for anchor links within a page
	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
		}, 500);
		return false;
	});

});