<?php
/**
 * This is the custom post type taxonomy template. If you edit the custom post type name,
 * you have to change the name of this template to reflect that change.
 *
 * For example, if your custom taxonomy is called "register_taxonomy( 'bookmarks')",
 * then your template name should be taxonomy-bookmarks.php
 *
 * For more info: http://codex.wordpress.org/Post_Type_Templates
 */

get_header(); ?>
			
<div id="content">

	<div id="inner-content" class="row">

	    <main id="main" class="small-12 medium-8 large-8 columns first" role="main">
	
		    <header>
		    	<h1 class="page-title"><span><?php _e( 'Posts Categorized:', 'jointswp' ); ?></span> <?php single_cat_title(); ?></h1>
		    </header>

			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		 
				<!-- To see additional archive styles, visit the /parts directory -->
				<?php get_template_part( 'parts/loop', 'archive' ); ?>
			    
			<?php endwhile; ?>	

				<?php joints_page_navi(); ?>
				
			<?php else : ?>
										
				<?php get_template_part( 'parts/content', 'missing' ); ?>
					
			<?php endif; ?>

	    </main> <!-- end #main -->

	    <?php get_sidebar(); ?>
	    
	</div> <!-- end #inner-content -->

</div> <!-- end #content -->

<?php get_footer(); ?>