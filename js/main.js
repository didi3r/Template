$(document).ready(function() {
	// Sets the slides cointainer width based on the number
	// of slides
	var slideWidth = $('.slider .slide').outerWidth();
	var totalSlides = $('.slider .slide').length;
	$('.slider .slides').width(slideWidth * totalSlides);

	// Moves the last slide before the first one (in case of user clicks prev
	// button) and moves one slide left to set initial position in the first slide
	$('.slider .slide:first').before($('.slider .slide:last'));
    $('.slider .slides').css('marginLeft', -slideWidth);

    // When click next button animates margin left of the slides container
    // in order to create a "slide left" effect
	$('.slider .next a').click(function(e) {
		e.preventDefault();
		$('.slider .slides').animate({
			marginLeft: '-=' + slideWidth
		},
			300, function() {
				// Moves the first slide on the queue to after the last one
				// to create a cyclic effect and then adjusts the margin in order
				// to the current slide remains visible
				$('.slider .slide:last').after( $('.slider .slide:first') );
               	$('.slider .slides').css('marginLeft', -slideWidth);
		});
	});

	// Does the same as next buttom but inthe opposite direction
	$('.slider .prev a').click(function(e) {
		e.preventDefault();
		$('.slider .slides').animate({
			marginLeft: '+=' + slideWidth
		},
			300, function() {
				$('.slider .slide:first').before( $('.slider .slide:last') );
               	$('.slider .slides').css('marginLeft', -slideWidth);
		});
	});

	// Autostart
	setInterval(function() {
		$('.slider .next a').click();
	}, 4000);
});