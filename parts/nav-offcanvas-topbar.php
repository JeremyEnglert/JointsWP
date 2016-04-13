<!-- By default, this menu will use off-canvas for small
	 and a topbar for medium-up -->

<div class="top-bar" id="top-bar-menu">
	<div class="top-bar-left float-left">
		<?php if ( joints_the_custom_logo() ) { // Display custom logo if set in customizr. If nothing is set, display site title.
				joints_the_custom_logo();
			} else { ?>
				<li><a href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a></li>
		<?php }; ?>
	</div>
	<div class="top-bar-right show-for-medium">
		<?php joints_top_nav(); ?>	
	</div>
	<div class="top-bar-right float-right show-for-small-only">
		<ul class="menu">
			<!-- <li><button class="menu-icon" type="button" data-toggle="off-canvas"></button></li> -->
			<li><a data-toggle="off-canvas"><?php _e( 'Menu', 'jointswp' ); ?></a></li>
		</ul>
	</div>
</div>
