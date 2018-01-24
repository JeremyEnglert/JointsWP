// Place your custom JavaScript here.
$(document).ready(function() {
	// Remove empty P tags created by WP inside of Accordion and Orbit
	$('.accordion p:empty, .orbit p:empty').remove();

	// Adds Flex Video to YouTube and Vimeo Embeds
	$('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]').each(function() {
		if ($(this).innerWidth() / $(this).innerHeight() > 1.5) {
			$(this).wrap("<div class='widescreen responsive-embed'/>");
		} else {
			$(this).wrap("<div class='responsive-embed'/>");
		}
	});
});
