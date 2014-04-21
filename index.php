<?php get_template_part( 'partials/header', 'main' ); ?>

			<div id="content">
			
				<div id="inner-content" class="row clearfix">
			
				    <div id="main" class="large-8 medium-8 columns clearfix" role="main">

					    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
					
					    	<?php get_template_part( 'partials/loop', 'archive' ); ?>
					
					    <?php endwhile; ?>	
					
					        <?php if (function_exists('joints_page_navi')) { ?>
					            <?php joints_page_navi(); ?>
					        <?php } else { ?>
					        
					            <nav class="wp-prev-next">
					                <ul class="clearfix">
					        	        <li class="prev-link"><?php next_posts_link(__('&laquo; Older Entries', "jointstheme")) ?></li>
					        	        <li class="next-link"><?php previous_posts_link(__('Newer Entries &raquo;', "jointstheme")) ?></li>
					                </ul>
					            </nav>
					        <?php } ?>		
					
					    <?php else : ?>
					    
    						<?php get_template_part( 'partials/content', 'missing' ); ?>
					
					    <?php endif; ?>
			
				    </div> <!-- end #main -->
    
				    <div id="sidebar1" class="sidebar large-4 medium-4 columns" role="complementary">
    
				    	<?php get_sidebar(); ?>
				    
					</div>
				    
				</div> <!-- end #inner-content -->
    
			</div> <!-- end #content -->

<?php get_template_part( 'partials/footer', 'main' ); ?>
