<?php get_header(); ?>
			
			<div id="content">

				<div id="inner-content" class="row">
			
					<div id="main" class="large-8 medium-8 columns first" role="main">
						<h1 class="archive-title"><span><?php _e('Search Results for:', 'jointstheme'); ?></span> <?php echo esc_attr(get_search_query()); ?></h1>

						<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
					
							<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article">
								<header class="article-header">

									<h3 class="search-title"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h3>
										<?php get_template_part( 'partials/content', 'byline' ); ?>
						
								</header> <!-- end article header -->
					
								<section class="entry-content">
									<?php the_content('<button class="tiny">Read more...</button>'); ?> 
								</section> <!-- end article section -->
						
								<footer class="article-footer">
							
								</footer> <!-- end article footer -->
					
							</article> <!-- end article -->
					
						<?php endwhile; ?>	
					
						        <?php joints_page_navi(); ?>	
					
					    <?php else : ?>
					
    					    <article id="post-not-found" class="hentry clearfix">
    					    	<header class="article-header">
    					    		<h1>Sorry, No Results.</h1>
    					    	</header>
    					    	<section class="entry-content">
    					    		<p>Try your search again.</p>
    					    	</section>
    					    	<section class="search">
                                    			<p><?php get_search_form(); ?></p>
                		                </section> <!-- end search section -->
    					    	<footer class="article-footer">
    					    	    <p>This is the error message in the search.php template.</p>
    					    	</footer>
    					    </article>
					
					    <?php endif; ?>
			
				    </div> <!-- end #main -->
    			
    			    <?php get_sidebar(); ?>
    			
    			</div> <!-- end #inner-content -->
    
			</div> <!-- end #content -->

<?php get_footer(); ?>
