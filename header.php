<?php
/**
 * The template for displaying the header
 *
 * This is the template that displays all of the <head> section
 */
?>

<!doctype html>

  <html class="no-js"  <?php language_attributes(); ?>>

	<head>
	
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">		
		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<?php wp_head(); ?>

	</head>
			
	<body <?php body_class(); ?>>
				
		<div class="site-wrapper">
			<!--
			https://make.wordpress.org/accessibility/handbook/markup/skip-links/
			It's okay to have multiple skip links.
			For example, an additional skip link to jump to a footer menu.
			-->
			<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to Content', 'theme_namespace' ); ?></a>

			<header class="header" role="banner">
						
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				
			</header> 

			<nav class="main-navigation-wrapper" aria-label="Main">

				<?php theme_namespace_top_nav(); ?>
				
			</nav>

