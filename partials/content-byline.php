<p class="byline">
	<?php printf(__('Posted by <span class="author">%3$s</span> on <time class="updated" datetime="%1$s" pubdate>%2$s</time> -- %4$s', 'jointstheme'), get_the_time('Y-m-j'), get_the_time(get_option('date_format')), joints_get_the_author_posts_link(), get_the_category_list(', '));?>
</p>	