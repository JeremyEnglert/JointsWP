/* 
	These functions make sure WordPress and
	Foundation play nice together.
*/

// Remove empty P tags created by WP inside of Accordions
jQuery(document).ready(function() {
    jQuery('.accordion p:empty').remove();
});