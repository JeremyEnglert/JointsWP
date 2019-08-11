<?php
/**
 * Modifies the default "read more" text.
 */

function modify_read_more_link() {
    return '<a class="more-link"' .
            'aria-label="' . __('Continue reading', 'jointstheme') . ' ' . get_the_title() . '"' . 
            'href="' . get_permalink() . '">' . 
            __('Read More', 'jointstheme') . '</a>';
}
add_filter( 'the_content_more_link', 'modify_read_more_link' );