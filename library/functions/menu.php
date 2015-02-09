<?php
// Register menus
register_nav_menus(
	array(
		'top-nav' => __( 'The Top Menu' ),   // Top nav in header
		'main-nav' => __( 'The Main Menu' ),   // Main nav in header
		'footer-links' => __( 'Footer Links' ) // Secondary nav in footer
	)
);

// The Top Menu
function joints_top_nav() {
    wp_nav_menu(array(
    	'container' => false,                           // Remove nav container
    	'container_class' => '',           // Class of container (should you choose to use it)
    	'menu' => __( 'The Top Menu', 'jointstheme' ),  // Nav name
    	'menu_class' => '',         // Adding custom nav class
    	'theme_location' => 'top-nav',                 // Where it's located in the theme
    	'before' => '',                                 // Before the menu
        'after' => '',                                  // After the menu
        'link_before' => '',                            // Before each link
        'link_after' => '',                             // After each link
    	'fallback_cb' => 'joints_main_nav_fallback'      // Fallback function
	));
} /* End Top Menu */

// The Main Menu
function joints_main_nav() {
    wp_nav_menu(array(
    	'container' => false,                           // Remove nav container
    	'container_class' => '',           	// Class of container (should you choose to use it)
    	'menu' => __( 'The Main Menu', 'jointstheme' ),  // Nav name
    	'menu_class' => '',         	// Adding custom nav class
    	'theme_location' => 'main-nav',                 // Where it's located in the theme
    	'before' => '',                                 // Before the menu
        'after' => '',                                  // After the menu
        'link_before' => '',                            // Before each link
        'link_after' => '',                             // After each link
    	'fallback_cb' => 'joints_main_nav_fallback'      // Fallback function
	));
} /* End Main Menu */

// The Footer Menu
function joints_footer_links() {
    wp_nav_menu(array(
    	'container' => '',                              // Remove nav container
    	'container_class' => 'footer-links clearfix',   // Class of container (should you choose to use it)
    	'menu' => __( 'Footer Links', 'jointstheme' ),   // Nav name
    	'menu_class' => 'sub-nav',      // Adding custom nav class
    	'theme_location' => 'footer-links',             // Where it's located in the theme
    	'before' => '',                                 // Before the menu
        'after' => '',                                  // After the menu
        'link_before' => '',                            // Before each link
        'link_after' => '',                             // After each link
        'depth' => 0,                                   // Limit the depth of the nav
    	'fallback_cb' => 'joints_footer_links_fallback'  // Fallback function
	));
} /* End Footer Menu */

// Header Fallback Menu
function joints_main_nav_fallback() {
	wp_page_menu( array(
		'show_home' => true,
    	'menu_class' => '',      // Adding custom nav class
		'include'     => '',
		'exclude'     => '',
		'echo'        => true,
        'link_before' => '',                            // Before each link
        'link_after' => ''                             // After each link
	) );
}

// Footer Fallback Menu
function joints_footer_links_fallback() {
	/* You can put a default here if you like */
}
?>
