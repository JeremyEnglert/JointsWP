<h1 class="page-title"><?php post_type_archive_title(); ?></h1>
<ul class="accordion" data-accordion>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	<li class="accordion-navigation">											
		<a href="#panel-<?php the_ID(); ?>" title="<?php the_title_attribute(); ?>"> <h4 class="fi-plus "> <?php the_title(); ?></h4></a>
	    <div class="content" id="panel-<?php the_ID(); ?>">
			<?php the_content('<button class="tiny">Read more...</button>'); ?>
	    </div> <!-- end article section -->
	</li>		
<?php endwhile; ?>
</ul>	

<?php joints_page_navi(); ?>

<?php else : ?>
    <?php get_template_part( 'parts/missing', 'content' ); ?>
<?php endif; ?>