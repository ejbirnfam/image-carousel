/*$(document).ready(function() {*/
$(function() {
	//do stuff here when document is fully loaded
	var $slide = $('.slide'),
		$tray = $('#tray'),
	 	slideWidth = $slide.width(), // CSS width
	 	slideCount = $slide.size(), //counts how many there are
	 	pos = 0;

	//console.log(slideWidth) //test

	//set width of tray to match the width of all slides
	$tray.width(slideWidth * slideCount);

	//next
	$('#next').click(function(event){
		event.preventDefault();
		if (pos < slideCount -1) {
			pos += 1;
		} else {
			pos = 0;
		}
		var pushAmount = pos * slideWidth;
		$tray.animate({'right':pushAmount}, 400);
	});

	//previous
	$('#prev').click(function(event){
		event.preventDefault();
		if (pos > 0) {
			pos -= 1;
		} else {
			pos = slideCount -1;
		}
		var pushAmount = pos * slideWidth;
		$tray.animate({'right':pushAmount}, 400);
	});
});
