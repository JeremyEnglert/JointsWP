<?php get_header(); ?>
			
			<div id="content">
			
				<div id="inner-content" class="row clearfix">
					
				    <div id="main" class="large-8 medium-8 columns first clearfix" role="main">
				
						<h1 class="page-title"><?php post_type_archive_title(); ?></h1>
						<dl class="accordion" data-accordion>

					    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
							<dd>											
								<a href="#panel<?php the_ID(); ?>" title="<?php the_title_attribute(); ?>"> <h4 class="fi-plus "> <?php the_title(); ?></h4></a>
							
							    <div class="content" id="panel<?php the_ID(); ?>">
							
								    <?php the_content(); ?>
	
							    <div> <!-- end article section -->
							</dd>		
					    <?php endwhile; ?>
					    </dl>	
					
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
					
                <?php get_template_part( 'partials/missing', 'content' ); ?>
					
					    <?php endif; ?>
			
    				</div> <!-- end #main -->
    				
    				<?php get_sidebar(); ?>
                    
                </div> <!-- end #inner-content -->
                
			</div> <!-- end #content -->

<?php get_footer(); ?>
