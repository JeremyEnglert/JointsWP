<?php get_template_part( 'partials/header', 'main' ); ?>
			
			<div id="content">
			
				<div id="inner-content" class="row clearfix">
			
				    <div id="main" class="large-8 medium-8 columns" role="main">

					    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
					
					    	<?php get_template_part( 'partials/loop', 'page' ); ?>
					    					
					    <?php endwhile; else : ?>
					
					   		<?php get_template_part( 'partials/content', 'missing' ); ?>

					    <?php endif; ?>
			
    				</div> <!-- end #main -->
    				
    				<div id="sidebar1" class="sidebar large-4 medium-4 columns" role="complementary">
    
				    	<?php get_sidebar(); ?>
				    
					</div>
				    
				</div> <!-- end #inner-content -->
    
			</div> <!-- end #content -->
			
<?php get_template_part( 'partials/footer', 'main' ); ?>
