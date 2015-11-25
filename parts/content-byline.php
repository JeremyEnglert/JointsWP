<?php
	/* Translators: %1$s is the time, %2$s is the link to the author's archive, %3$s is the category */
	printf( '<p class="byline">' . __( 'Posted on %1$s by %2$s - %3$s', 'jointswp' ) . '</p>',
		get_the_time( 'F j, Y' ),
		get_the_author_posts_link(),
		get_the_category_list( __( ', ', 'jointswp' ) )
	);
?>
