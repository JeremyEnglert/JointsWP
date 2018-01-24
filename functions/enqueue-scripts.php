<?php
function site_scripts() {
	global $wp_styles; // Call global $wp_styles variable to add conditional wrapper around ie stylesheet the WordPress way.

	// Deregister the jquery version bundled with WordPress.
	wp_deregister_script( 'jquery' );

	// CDN hosted jQuery placed in the header, as some plugins require that jQuery is loaded in the header.
	wp_enqueue_script( 'jquery', '//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', array(), '3.2.1', true );

	// Adding scripts file in the footer.
	wp_enqueue_script( 'site-js', get_template_directory_uri() . '/assets/scripts/scripts.js', array( 'jquery' ), filemtime( get_template_directory() . '/assets/scripts/js' ), true );

	// Register main stylesheet.
	wp_enqueue_style( 'site-css', get_template_directory_uri() . '/assets/styles/style.css', array(), filemtime( get_template_directory() . '/assets/styles/scss' ), 'all' );

	// Comment reply script for threaded comments.
	if ( is_singular() && comments_open() && ( get_option( 'thread_comments' ) === 1 ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'site_scripts', 999 );
