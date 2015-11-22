<p class="byline">
	
	<?php
		
		/* Translators: %1$s is the time, %2$s is the link to the author's archive, %3$s is the category */
		printf( __( 'Posted on %1$s by %2$s - %3$s', 'jointswp' ),
			the_time( 'F j, Y' ),
			the_author_posts_link(),
			the_category( ', ' )
		);
		
	?>
	
</p>	
