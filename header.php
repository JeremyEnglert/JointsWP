<!doctype html>

<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?>> <!--<![endif]-->

	<head>
		<meta charset="utf-8">
		<title><?php wp_title(''); ?></title>

		<!-- Mobile Neta -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

		<!-- Icons & Favicons -->
		<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
		<link href="<?php echo get_template_directory_uri(); ?>/library/images/apple-touch-icon.png" rel="apple-touch-icon" />
		<link href="<?php echo get_template_directory_uri(); ?>/library/images/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
		<link href="<?php echo get_template_directory_uri(); ?>/library/images/apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
		<link href="<?php echo get_template_directory_uri(); ?>/library/images/apple-touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
		<!--[if IE]>
			<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
		<![endif]-->
		<meta name="msapplication-TileColor" content="#f01d4f">
		<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/library/images/win8-tile-icon.png">

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<?php wp_head(); ?>

		<!-- Drop Google Analytics here -->
		<!-- end analytics -->

	</head>

	<body <?php body_class(); ?>>
		<div class="off-canvas-wrap" data-offcanvas>
			<div class="inner-wrap">
				<div id="container">
					<header class="header" role="banner">
							
						 <!-- This navs will be applied to the topbar, above all content 
							  To see additional nav styles, visit the /partials directory -->
						 <?php get_template_part( 'partials/nav', 'top-offcanvas' ); ?>
								 
						<div id="inner-header" class="row">
							<div class="large-12 medium-12 columns">
								<h1>
									<a href="<?php echo home_url(); ?>" rel="nofollow">
										<?php bloginfo('name'); ?>
									</a>
									<small>
										<?php  bloginfo('description'); ?>
									</small>
								</h1>
							</div>
							
							 <!-- This navs will be applied to the main, under the logo 
								  To see additional nav styles, visit the /partials directory -->
							 <?php // get_template_part( 'partials/nav', 'main-offcanvas' ); ?>
	
						</div> <!-- end #inner-header -->
					</header> <!-- end .header -->