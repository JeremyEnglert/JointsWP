<?php
function joints_scripts_and_styles() {
  global $wp_styles; // Call global $wp_styles variable to add conditional wrapper around ie stylesheet the WordPress way
  if (!is_admin()) {
    $theme_version = wp_get_theme()->Version;

	// Removes WP version of jQuery
	wp_deregister_script('jquery');
	
	// Loads jQuery from bower_components
    wp_enqueue_script( 'jquery', get_template_directory_uri() . '/bower_components/foundation/js/vendor/jquery.js', array(), '2.1.3', true );
    
    // Modernizr from bower_components
    wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/bower_components/foundation/js/vendor/modernizr.js', array(), '2.8.3', true );
    
    // Adding Foundation scripts file in the footer
   wp_enqueue_script( 'foundation-js', get_template_directory_uri() . '/assets/js/min/foundation.min.js', array( 'jquery' ), '', true );
    
    // Adding scripts file in the footer
    wp_enqueue_script( 'site-js', get_template_directory_uri() . '/assets/js/min/scripts.min.js', array( 'jquery' ), '', true );
   
    // Register main stylesheet
    wp_enqueue_style( 'site-css', get_template_directory_uri() . '/assets/css/style.css', array(), '', 'all' );
    
    // Register foundation icons
    // wp_enqueue_style( 'foundation-icons', get_template_directory_uri() . '/assets/css/icons/foundation-icons.css', array(), '3.0', 'all' );

    // Comment reply script for threaded comments
    if ( is_singular() AND comments_open() AND (get_option('thread_comments') == 1)) {
      wp_enqueue_script( 'comment-reply' );
    }
  }
}
add_action('wp_enqueue_scripts', 'joints_scripts_and_styles', 999);
?>