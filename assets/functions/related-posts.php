<?php
// Related Posts Function, matches posts by tags - call using joints_related_posts(); )
function joints_related_posts() {
	global $post;
	$tag_arr = '';
	$tags = wp_get_post_tags( $post->ID );
	$tag_arr = '';
	if($tags) {
		foreach( $tags as $tag ) {
			$tag_arr .= $tag->slug . ',';
		}
		$args = array(
			'tag' => $tag_arr,
			'numberposts' => 5, /* you can change this to show more */
			'post__not_in' => array($post->ID)
		);
		$related_posts = get_posts( $args );
		if($related_posts) :?>
			<div class="sidebar-posts related-posts">
				<h3>Related Articles</h3>
				<ul class="posts">
					<?php foreach($related_posts as $post) : setup_postdata($post); ?>
						<li class="related-post">
							<div class="post-date">
								<?php get_template_part( 'parts/content', 'byline' ); ?>
							</div>
							<a href="<?php the_permalink() ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a>
						</li>
					<?php endforeach;?>
				</ul>
			</div>
		<?php endif; ?>

		<?php
	}
	wp_reset_postdata();
	?>
	<?php if(!$tags):?>
		<div class="sidebar-posts related-posts">
			<h3>Related Articles</h3>
			<ul class="posts">
				<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
					<li>
						<div class="post-date">
							<?php get_template_part( 'parts/content', 'byline' ); ?>
						</div>
						<a href="<?php the_permalink() ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a>
					</li>

				<?php endwhile; endif; ?>
			</ul>
		</div>
	<?php endif; ?>

	<?php
} /* end joints related posts function */
