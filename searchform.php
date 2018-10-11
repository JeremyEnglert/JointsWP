<?php
/**
 * The template for displaying search form
 */
 ?>

<form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">
	<label>
		<span class="screen-reader-text"><?php echo _x( 'Search for:', 'label', 'theme_namespace' ) ?></span>
		<input type="search" class="search-field" placeholder="<?php echo esc_attr_x( 'Search...', 'theme_namespace' ) ?>" value="<?php echo get_search_query() ?>" name="s" title="<?php echo esc_attr_x( 'Search for:', 'theme_namespace' ) ?>" />
	</label>
	<input type="submit" class="search-submit button" value="<?php echo esc_attr_x( 'Search', 'theme_namespace' ) ?>" />
</form>