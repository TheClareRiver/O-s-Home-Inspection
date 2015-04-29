// By Chris Coyier & tweaked by Mathias Bynens

$(function() {
	// Find all YouTube videos
	var $allVideos = $("iframe[src^='http://www.youtube.com']"),
	    // The element that is fluid width
	    $fluidEl = $(".wrapper");
	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {
		$(this)
			.data('aspectRatio', this.height / this.width)
			// and remove the hard coded width/height
			.removeAttr('height')
			.removeAttr('width');
	});

	// When the window is resized
	// (You'll probably want to debounce this)
	$(window).resize(function() {
		var newWidth = $fluidEl.width();
		// Resize all videos according to their own aspect ratio
		$allVideos.each(function() {
			var $el = $(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.data('aspectRatio'));
		});
	// Kick off one resize to fix all videos on page load
	}).resize();
});



//Change header background color when scrolling
var t = $('#top').offset().top - 100;
var t1 = $('#header-background-trigger').offset().top - 200;

	$(document).scroll(function(){
		
	    if($(this).scrollTop() > t1) { 
		    if ($(window).width() > 830){  
		        $('header').css({"background":"rgba(14, 29, 51, 1)"});
		    }
	    } else if($(this).scrollTop() > t) { 
		    if ($(window).width() > 830){  
		        $('header').css({"background":"none"});
		    }
	    } else {
	    	if ($(window).width() > 830){
		        $('header').css({"background":"#173A7B"});
		    }
	    }
	});


//Trigger animation when user scrolls to image

$(window).scroll(function() {
	$('#house-icon').each(function(){
	var imagePos = $(this).offset().top;
	
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideRight");
		}
	});

	$('#search-icon').each(function(){
	var imagePos = $(this).offset().top;
	
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideLeft");
		}
	});								

});


