<?php 
/*
Put block template parts in the /blocks directory.
They need to be named exactly the same as the field name.
*/
?>

<?php $id = get_the_ID(); ?>

<?php if ( have_rows( 'content-builder', $id ) ): ?>
    <?php while ( have_rows( 'content-builder', $id ) ) : the_row(); ?>
        <?php get_template_part( 'blocks/' . get_row_layout() . '/' . get_row_layout() ); ?>
	<?php endwhile; ?>
<?php endif; ?>
