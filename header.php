<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

	<head>
		<meta charset="utf-8">

		<title><?php wp_title(''); ?></title>

		<!-- Google Chrome Frame for IE -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<!-- mobile meta -->
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

		<!-- icons & favicons -->
		<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-icon-touch.png">
		<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
		<!--[if IE]>
			<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
		<![endif]-->
		<!-- or, set /favicon.ico for IE10 win -->
		<meta name="msapplication-TileColor" content="#f01d4f">
		<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/library/images/win8-tile-icon.png">

  	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<!-- wordpress head functions -->
		<?php wp_head(); ?>
		<!-- end of wordpress head -->

		<!-- drop Google Analytics Here -->
		<!-- end analytics -->

	</head>

	<body <?php body_class(); ?>>

	<div class="off-canvas-wrap">
		<div class="inner-wrap">
			<div id="container">
	
				<header class="header" role="banner">
	
					<div id="inner-header" class="row">
						<div class="large-12 columns">
							<p id="logo"><a href="<?php echo home_url(); ?>" rel="nofollow"><?php bloginfo('name'); ?></a></p>
							<p class="description"><?php  bloginfo('description'); ?></p>
						</div>
						
						<div class="large-12 columns show-for-medium-up">
							<div class="contain-to-grid sticky">
								<nav class="top-bar" data-topbar>
									<ul class="title-area">
									    <!-- Title Area -->
										<li class="name">
										     <h1> <a href="<?php echo home_url(); ?>" rel="nofollow"><?php bloginfo('name'); ?></a></h1>
								        </li>
									    <li class="toggle-topbar menu-icon">
									    	<a href="#"><span>Menu</span></a>
									    </li>
							   	    </ul>		
									<section class="top-bar-section">
										  <?php joints_main_nav(); ?>
									</section>
								</nav>
							</div>
						</div>
						
						<div class="large-12 columns show-for-small-only">
							<div class="contain-to-grid sticky">
								<nav class="tab-bar">
							      <section class="middle tab-bar-section">
							        <h1 class="title"><?php bloginfo('name'); ?></h1>
							      </section>
							      <section class="left-small">
							        <a class="left-off-canvas-toggle menu-icon" ><span></span></a>
							      </section>
							    </nav>
							</div>
						</div>

						
							<aside class="left-off-canvas-menu show-for-small-only">
							   <ul class="off-canvas-list">
							     <li><label>Navigation</label></li>
							      <?php joints_main_nav(); ?>    
							    </ul>
							</aside>
			
						<a class="exit-off-canvas"></a>
					</div> <!-- end #inner-header -->
	
				</header> <!-- end header -->
			
