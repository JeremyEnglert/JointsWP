<?php
function joints_scripts_and_styles() {
  global $wp_styles; // Call global $wp_styles variable to add conditional wrapper around ie stylesheet the WordPress way
  if (!is_admin()) {
    $theme_version = wp_get_theme()->Version;

	// Removes WP version of jQuery
	wp_deregister_script('jquery');
	
	// Loads jQuery from bower_components
    wp_enqueue_script( 'jquery', get_template_directory_uri() . '/bower_components/foundation/js/vendor/jquery.js', array(), '2.1.3', false );
    
    // Modernizr from bower_components
    wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/bower_components/foundation/js/vendor/modernizr.js', array(), '2.8.3', false );
    
    // Adding Foundation scripts file in the footer
    wp_enqueue_script( 'foundation-js', get_template_directory_uri() . '/bower_components/foundation/js/foundation.min.js', array( 'jquery' ), '5.5.1', true );
    
    // Adding scripts file in the footer
    wp_enqueue_script( 'joints-js', get_template_directory_uri() . '/library/js/scripts.js', array( 'jquery' ), $theme_version, true );
   
    // Register main stylesheet
    wp_enqueue_style( 'joints-stylesheet', get_template_directory_uri() . '/library/css/style.css', array(), $theme_version, 'all' );
    
    // Register foundation icons
    // wp_enqueue_style( 'foundation-icons', get_template_directory_uri() . '/library/css/icons/foundation-icons.css', array(), '3.0', 'all' );

    // Comment reply script for threaded comments
    if ( is_singular() AND comments_open() AND (get_option('thread_comments') == 1)) {
      wp_enqueue_script( 'comment-reply' );
    }
  }
}
add_action('wp_enqueue_scripts', 'joints_scripts_and_styles', 999);
?>