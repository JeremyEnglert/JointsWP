(function($) {
jQuery(document).foundation()

	// Joyride: Add java script to footer so all Foundation scripts will work
	.foundation('joyride', 'start');

	// Add button class to all submit buttons
	jQuery('input[type="submit"]').addClass('tiny radius button');
	
	// Adds flex video to embeded video: http://foundation.zurb.com/docs/components/flex-video.html
    jQuery('iframe[src*="vimeo.com"]').wrap('<div class="flex-video widescreen vimeo />');
	jQuery('iframe[src*="dailymotion.com"]').wrap('<div class="flex-video widescreen" />');
    jQuery('iframe[src*="youtube.com"]').wrap('<div class="flex-video widescreen" />');
	
	// BackToTop: you can change the speed of the scroll below
	jQuery(window).load(function() {
		jQuery("#topofpage").hide().removeAttr("href");
		if (jQuery(window).scrollTop() != "0")
			jQuery("#backtotop").fadeIn("slow")
		var scrollDiv = jQuery("#backtotop");
		jQuery(window).scroll(function(){
			if (jQuery(window).scrollTop() == "0")
				jQuery(scrollDiv).fadeOut("slow")
			else
				jQuery(scrollDiv).fadeIn("slow")
		});	
	});	
	// BacktoTop
	jQuery('#backtotop').click(function(){
		jQuery('html, body').animate({
		scrollTop: jQuery('body').offset().top
		}, 1000);				   
	});		
	
// end loading all functions   
   
})(jQuery);