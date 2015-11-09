<?php
// Register menus
register_nav_menus(
	array(
		'main-nav' => __( 'The Main Menu', 'jointswp' ),   // Main nav in header
		'footer-links' => __( 'Footer Links', 'jointswp' ) // Secondary nav in footer
	)
);

// The Top Menu
function joints_top_nav() {
	 wp_nav_menu(array(
        'container' => false,                           // Remove nav container
        'menu_class' => 'vertical medium-horizontal menu',       // Adding custom nav class
        'items_wrap' => '<ul id="%1$s" class="%2$s" data-responsive-menu="accordion medium-dropdown">%3$s</ul>',
        'theme_location' => 'main-nav',        			// Where it's located in the theme
        'depth' => 5,                                   // Limit the depth of the nav
        'fallback_cb' => false,                         // Fallback function (see below)
       
        'walker' => new Foundation_Menu_Walker()
    ));
} /* End Top Menu */

// The Footer Menu
function joints_footer_links() {
    wp_nav_menu(array(
    	'container' => '',                              // Remove nav container
    	'container_class' => 'footer-links clearfix',   // Class of container (should you choose to use it)
    	'menu' => __( 'Footer Links', 'jointswp' ),   // Nav name
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