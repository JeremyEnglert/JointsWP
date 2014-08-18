<?php						
	$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;	
	$args = array (
		'posts_per_page' => 9,
		'paged' => $paged,
	);
?>

<?php $grid = new WP_Query ( $args ); ?>

<?php if( $grid->have_posts() ) : ?>

    <?php while ( $grid->have_posts() ) : $grid->the_post(); ?>

        <?php if( 0 === ( $grid->current_post  )  % 3 ): ?>
            <div class="row" data-equalizer> <!--Begin Row:--> 
        <?php endif; ?> 

        <!--Item: -->
        <div class="large-4 medium-4 columns panel" data-equalizer-watch>
        
			<article id="post-<?php the_ID(); ?>" <?php post_class(''); ?> role="article">
			
				<section class="featured-image" itemprop="articleBody">
					<?php the_post_thumbnail('full'); ?>
				</section> <!-- end article section -->
			
				<header class="article-header">
					<h3 class="title"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h3>	
					<?php get_template_part( 'partials/content', 'byline' ); ?>				
				</header> <!-- end article header -->	
								
				<section class="entry-content" itemprop="articleBody">
					<?php the_content('<button class="tiny">Read more...</button>'); ?> 
				</section> <!-- end article section -->
								    							
			</article> <!-- end article -->
			
		</div>

        <?php if( 0 === ( $grid->current_post + 1 )  % 3  ||  ( $grid->current_post + 1 ) ===  $grid->post_count ): ?>
           </div>  <!--End Row: --> 
        
        <?php endif; ?>

<?php endwhile; ?>

<?php wp_reset_postdata(); ?>
					     
        <?php joints_page_navi(); ?>		

<?php else : ?>

	<?php get_template_part( 'partials/content', 'missing' ); ?>

<?php endif; ?>
