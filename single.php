<?php get_header(); ?>
			
			<div id="content">

				<div id="inner-content" class="row clearfix">
			
					<div id="main" class="large-8 medium-8 columns first clearfix" role="main">

						<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
					
							<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">
						
								<header class="article-header">	
									<h1 class="entry-title single-title" itemprop="headline"><?php the_title(); ?></h1>
                  <p class="byline"><?php
                    printf(__('Posted <time class="updated" datetime="%1$s" pubdate>%2$s</time> by <span class="author">%3$s</span> <span class="amp">&amp;</span> filed under %4$s.', 'jointstheme'), get_the_time('Y-m-j'), get_the_time(get_option('date_format')), joints_get_the_author_posts_link(), get_the_category_list(', '));
                  ?></p>
								</header> <!-- end article header -->
					
								<?php get_template_part( 'partials/entry', 'content' ); ?>
						
								<footer class="article-footer">
									<?php the_tags('<p class="tags"><span class="tags-title">' . __('Tags:', 'jointstheme') . '</span> ', ', ', '</p>'); ?>
								</footer> <!-- end article footer -->
					
							</article> <!-- end article -->
					
						<?php endwhile; ?>			
					
						<?php else : ?>
					
    					<?php get_template_part( 'partials', 'not-found' ); ?>

						<?php endif; ?>
			
					</div> <!-- end #main -->
    
					<?php get_sidebar(); ?>

				</div> <!-- end #inner-content -->
    
			</div> <!-- end #content -->

<?php get_footer(); ?>
