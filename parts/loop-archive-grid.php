<?php foreach (array_chunk($posts, 3, true) as $posts) :  ?>

    <div class="row" data-equalizer> <!--Begin Row:--> 
    
            <?php foreach( $posts as $post ) : setup_postdata($post); ?>

        <!--Item: -->
		<div class="large-4 medium-4 columns" data-equalizer-watch>
        
			<article id="post-<?php the_ID(); ?>" <?php post_class(''); ?> role="article">
			
				<section class="featured-image" itemprop="articleBody">
					<?php the_post_thumbnail('full'); ?>
				</section> <!-- end article section -->
			
				<header class="article-header">
					<h3 class="title"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h3>	
					<?php get_template_part( 'parts/content', 'byline' ); ?>				
				</header> <!-- end article header -->	
								
				<section class="entry-content" itemprop="articleBody">
					<?php the_content('<button class="tiny">Read more...</button>'); ?> 
				</section> <!-- end article section -->
								    							
			</article> <!-- end article -->
			
		</div>
		
	 <?php endforeach; ?>
	
	</div>  <!--End Row: --> 
	
<?php endforeach; ?>    

<?php wp_reset_postdata(); ?>