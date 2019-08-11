<?php 
/**
 * The sidebar containing the main widget area
 */
 ?>

<aside id="sidebar" class="sidebar">

	<?php if ( is_active_sidebar( 'general-sidebar' ) ) : ?>

		<?php dynamic_sidebar( 'general-sidebar' ); ?>

	<?php endif; ?>

</aside>