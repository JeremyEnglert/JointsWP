<?php
/**
 * The template for displaying 404 (page not found) pages.
 *
 * For more info: https://codex.wordpress.org/Creating_an_Error_404_Page
 */

get_header(); ?>
			
	<div class="content">

		<div class="inner-content grid-x grid-margin-x grid-padding-x">
	
			<main class="main small-12 medium-8 large-8 cell" role="main">

				<article class="content-not-found">
				
					<header class="article-header">
						<h1><?php _e( 'Epic 404 - Article Not Found', 'jointswp' ); ?></h1>
					</header> <!-- end article header -->
			
					<section class="entry-content">
						<p><?php _e( 'The article you were looking for was not found, but maybe try looking again!', 'jointswp' ); ?></p>
					</section> <!-- end article section -->

					<section class="search">
					    <p><?php get_search_form(); ?></p>
					</section> <!-- end search section -->
			
				</article> <!-- end article -->
	
			</main> <!-- end #main -->

		</div> <!-- end #inner-content -->

	</div> <!-- end #content -->

<?php get_footer(); ?>