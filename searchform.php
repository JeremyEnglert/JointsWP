<form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>" >
	<label class="screen-reader-text" for="s"><?php echo __('Search for:', 'jointstheme'); ?></label>
	<input type="search" value="<?php echo get_search_query(); ?>" name="s" id="s" placeholder="<?php echo esc_attr__('Search the Site...','jointstheme') ?>" />
	<input type="submit" id="searchsubmit" class="button" value="<?php echo esc_attr__('Search'); ?>" />
</form>