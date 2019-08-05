<?php
// Register menus
register_nav_menus(
	array(
		'main' => __( 'Main Menu', 'theme_namespace' ),   // Main nav in header
		'footer-links' => __( 'Footer Links', 'theme_namespace' ) // Secondary nav in footer
	)
);

// The Top Menu
function theme_namespace_top_nav() {
	 wp_nav_menu(array(
		'menu_class' => 'main-navigation',  // Adding custom nav class
		'container' => false,
        'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
		'theme_location' => 'main',  // Where it's located in the theme,
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

// Adjusts the default nav output for better accessibility 
function nav_dropdown_output( $item_output, $item, $depth, $args ) {

	// If an item has children, add a role of button and aria-expanded.
	// We use role instead of <button> for more consistent styling
    if( in_array( 'menu-item-has-children', $item->classes ) ) {
        $item_output = preg_replace( '/<a\s(.+?)>(.+?)<\/a>/is', '<a href="#" role="button" aria-expanded="false">$2</a>', $item_output );
    }
    return $item_output;
}
add_filter( 'walker_nav_menu_start_el', 'nav_dropdown_output', 10, 4 );