<?php get_header(); ?>
			
			<div id="content">
			
				<div id="inner-content" class="row">
				
				    <div id="main" class="large-8 medium-8 columns first" role="main">
					    
				    	<header>
				    		<h1 class="page-title"><?php the_archive_title();?></h1>
							<?php the_archive_description('<div class="taxonomy-description">', '</div>');?>
				    	</header>
				
				    	<!-- To see additional archive styles, visit the /parts directory -->
				    	<?php get_template_part( 'parts/loop', 'archive' ); ?>					
			
    				</div> <!-- end #main -->
    
	    			<?php get_sidebar(); ?>
                
                </div> <!-- end #inner-content -->
                
			</div> <!-- end #content -->

<?php get_footer(); ?>