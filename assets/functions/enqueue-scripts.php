<?php
function site_scripts() {
  global $wp_styles; // Call global $wp_styles variable to add conditional wrapper around ie stylesheet the WordPress way
    $theme_version = wp_get_theme()->Version;

	// Removes WP version of jQuery
	wp_deregister_script('jquery');
	
	// Loads jQuery from vendor
    wp_enqueue_script( 'jquery', get_template_directory_uri() . '/vendor/foundation/js/vendor/jquery.js', array(), '', true );
    
    // Modernizr from vendor
    wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/vendor/foundation/js/vendor/modernizr.js', array(), '', true );
    
    // Adding Foundation scripts file in the footer
   //wp_enqueue_script( 'foundation-js', get_template_directory_uri() . '/assets/js/foundation.js', array( 'jquery' ), '6.0', true );
      wp_enqueue_script( 'foundation-js', get_template_directory_uri() . '/vendor/foundation/js/foundation.js', array( 'jquery' ), '6.0', true );
    
    // Adding scripts file in the footer
    wp_enqueue_script( 'site-js', get_template_directory_uri() . '/assets/js/scripts.js', array( 'jquery' ), '', true );
   
    // Register main stylesheet
    wp_enqueue_style( 'site-css', get_template_directory_uri() . '/assets/css/style.css', array(), '', 'all' );
    
    // Register foundation icons
    // wp_enqueue_style( 'foundation-icons', get_template_directory_uri() . '/assets/css/icons/foundation-icons.css', array(), '3.0', 'all' );

    // Comment reply script for threaded comments
    if ( is_singular() AND comments_open() AND (get_option('thread_comments') == 1)) {
      wp_enqueue_script( 'comment-reply' );
    }
}
add_action('wp_enqueue_scripts', 'site_scripts', 999);