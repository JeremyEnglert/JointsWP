<?php
/** 
 * For more info: https://developer.wordpress.org/themes/basics/theme-functions/
 *
 */			
	
// Theme support options
require_once(get_template_directory().'/functions/theme-support.php'); 

require_once(get_template_directory().'/functions/read-more.php'); 


// WP Head and other cleanup functions
require_once(get_template_directory().'/functions/cleanup.php'); 

// Register scripts and stylesheets
require_once(get_template_directory().'/functions/enqueue-scripts.php'); 

// Register custom menus and menu walkers
require_once(get_template_directory().'/functions/menu.php'); 

// Register sidebars/widget areas
require_once(get_template_directory().'/functions/sidebar.php'); 

// Makes WordPress comments suck less
require_once(get_template_directory().'/functions/comments.php'); 

// Replace 'older/newer' post links with numbered navigation
require_once(get_template_directory().'/functions/page-navi.php'); 

// Remove Emoji Support
require_once(get_template_directory().'/functions/disable-emoji.php'); 

// Customize the WordPress login menu
require_once(get_template_directory().'/functions/login.php'); 

// Customize the WordPress admin (remove dashboard widgets, customize footer text)
require_once(get_template_directory().'/functions/admin.php'); 