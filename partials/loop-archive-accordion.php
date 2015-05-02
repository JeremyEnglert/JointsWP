<h1 class="page-title"><?php post_type_archive_title(); ?></h1>
<dl class="accordion" data-accordion>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	<dd>											
		<a href="#panel<?php the_ID(); ?>" title="<?php the_title_attribute(); ?>"> <h4 class="fi-plus "> <?php the_title(); ?></h4></a>
	    <div class="content" id="panel<?php the_ID(); ?>">
			<?php the_content(); ?>
	    </div> <!-- end article section -->
	</dd>		
<?php endwhile; ?>
</dl>	

<?php joints_page_navi(); ?>

<?php else : ?>
    <?php get_template_part( 'partials/missing', 'content' ); ?>
<?php endif; ?>
