<?php get_template_part( 'partials/header', 'html' ); ?>

	<div class="off-canvas-wrap">
		<div class="inner-wrap">
			<div id="container">

				<header class="header" role="banner">

					<div id="inner-header" class="row">
						<div class="large-12 columns">
							<h1>
								<a href="<?php echo home_url(); ?>" rel="nofollow">
									<?php bloginfo('name'); ?>
								</a>
								<small>
									<?php  bloginfo('description'); ?>
								</small>
							</h1>
						</div>

						 <?php get_template_part( 'partials/nav', 'offcanvas' ); ?>

						 <?php // get_template_part( 'partials/nav', 'topbar' ); ?>

						 <?php // get_template_part( 'partials/nav', 'offcanvas-sidebar' ); ?>

						<!-- You only need to use one of the above navigations.
							 Offcanvas-sidebar adds a sidebar to a "right" offcanavas menus. -->

					</div> <!-- end #inner-header -->

				</header> <!-- end header -->