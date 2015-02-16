<?php
// Adding WP 3+ Functions & Theme Support
function joints_theme_support() {

	// WP Thumbnails 
	add_theme_support('post-thumbnails');
	
	// Default thumbnail size
	set_post_thumbnail_size(125, 125, true);

	// RSS 
	add_theme_support('automatic-feed-links');

	// to add header image support go here: http://themble.com/support/adding-header-background-image-support/

	// adding post format support
	add_theme_support( 'post-formats',
		array(
			'aside',             // title less blurb
			'gallery',           // gallery of images
			'link',              // quick link to other site
			'image',             // an image
			'quote',             // a quick quote
			'status',            // a Facebook like status update
			'video',             // video
			'audio',             // audio
			'chat'               // chat transcript
		)
	);

	// wp menus
	add_theme_support( 'menus' );
	
	//html5 support (http://themeshaper.com/2013/08/01/html5-support-in-wordpress-core/)
	add_theme_support( 'html5', 
	         array( 
	         	'comment-list', 
	         	'comment-form', 
	         	'search-form', 
	         ) 
	);
} /* end joints theme support */
?>
