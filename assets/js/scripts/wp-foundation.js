/* 
These functions make sure WordPress 
and Foundation play nice together.
*/

// Remove empty P tags created by WP inside of Accordion and Orbit
jQuery(document).ready(function() {
    
    jQuery('.accordion p:empty, .orbit p:empty').remove();
    
    /**
	 * For parts/loop-archive-grid.php
	 * Makes sure last grid item floats left
	 */
	jQuery( '.archive-grid .columns' ).last().addClass( 'end' );

});