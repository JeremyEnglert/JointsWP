<?php
// Theme support options
require_once(get_template_directory().'/includes/theme-support.php'); 

// WP Head and other cleanup functions
require_once(get_template_directory().'/includes/cleanup.php'); 

// Register scripts and stylesheets
require_once(get_template_directory().'/includes/enqueue-scripts.php'); 

// Register custom menus and menu walkers
require_once(get_template_directory().'/includes/menu.php'); 

// Register sidebars/widget areas
require_once(get_template_directory().'/includes/sidebar.php'); 

// Makes WordPress comments suck less
require_once(get_template_directory().'/includes/comments.php'); 

// Replace 'older/newer' post links with numbered navigation
require_once(get_template_directory().'/includes/page-navi.php'); 

// Adds support for multiple languages
require_once(get_template_directory().'/includes/translation/translation.php'); 

// Adds site styles to the WordPress editor
// require_once(get_template_directory().'/includes/editor-styles.php'); 

// Remove 4.2 Emoji Support
// require_once(get_template_directory().'/includes/disable-emoji.php'); 

// Related post function - no need to rely on plugins
// require_once(get_template_directory().'/includes/related-posts.php'); 

// Use this as a template for custom post types
// require_once(get_template_directory().'/includes/custom-post-type.php');

// Customize the WordPress login menu
// require_once(get_template_directory().'/includes/login.php'); 

// Customize the WordPress admin
// require_once(get_template_directory().'/includes/admin.php'); 