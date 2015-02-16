<?php
// Add "has-dropdown" CSS class to navigation menu items that have children in a submenu.
function nav_menu_item_parent_classing( $classes, $item )
{
    global $wpdb;
    
    if ( 
        !property_exists( $item, 'classes' ) 
        || !is_array( $item->classes )
    ) {
        return $classes;
    }

    $has_children = in_array( 'menu-item-has-children', $item->classes );

    if ( $has_children ) {
        array_push( $classes, "has-dropdown" );
    }

    return $classes;
}
 
add_filter( "nav_menu_css_class", "nav_menu_item_parent_classing", 10, 2 );

// Deletes empty classes and changes the sub menu class name
function change_submenu_class($menu) {
    $menu = preg_replace('/ class="sub-menu"/',' class="dropdown"',$menu);
    return $menu;
}
add_filter ('wp_nav_menu','change_submenu_class');


//Use the active class of the Foundation for the current menu item. (From: https://github.com/milohuang/reverie/blob/master/functions.php)
function required_active_nav_class( $classes, $item ) {
    if ( $item->current == 1 || $item->current_item_ancestor == true ) {
        $classes[] = 'active';
    }
    return $classes;
}
add_filter( 'nav_menu_css_class', 'required_active_nav_class', 10, 2 );

?>
