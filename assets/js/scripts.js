jQuery(document).foundation();
/* 
These functions make sure WordPress 
and Foundation play nice together.
*/

// Remove empty P tags created by WP inside of Accordion and Orbit
jQuery(document).ready(function() {
    jQuery('.accordion p:empty, .orbit p:empty').remove();
});

/**
 * For parts/loop-archive-grid.php
 * When the total number of posts is not dividable by 3, the last post float to the right.
 * This can be fixed by adding the end class to the last item, which then floats the last item to the left instead.
 */
jQuery( '.category-grid .columns.panel' ).last().addClass( 'end' );