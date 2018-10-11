<?php
// Register menus
register_nav_menus(
	array(
		'main-nav' => __( 'The Main Menu', 'theme_namespace' ),   // Main nav in header
		'footer-links' => __( 'Footer Links', 'theme_namespace' ) // Secondary nav in footer
	)
);

// The Top Menu
function theme_namespace_top_nav() {
	 wp_nav_menu(array(
        'menu_class' => '',  // Adding custom nav class
        'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
        'theme_location' => 'main-nav',  // Where it's located in the theme
    ));
} 

// The Footer Menu
function theme_namespace_footer_links() {
    wp_nav_menu(array(
    	'container' => 'false',                         // Remove nav container
    	'menu' => __( 'Footer Links', 'theme_namespace' ),   	// Nav name
    	'menu_class' => 'menu',      					// Adding custom nav class
    	'theme_location' => 'footer-links',             // Where it's located in the theme
        'depth' => 0,                                   // Limit the depth of the nav
    	'fallback_cb' => ''  							// Fallback function
	));
} /* End Footer Menu */