<?php
/**
 * The template for displaying the footer. 
 *
 * Comtains closing divs for header.php.
 *
 * For more info: https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */			
 ?>
					
				<footer class="footer" role="contentinfo">
					
					<div class="inner-footer">
						
						<nav role="navigation">
							<?php theme_namespace_footer_links(); ?>
						</nav>
					
						<p class="source-org copyright">&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>.</p>
				
					</div> <!-- end .inner-footer -->
				
				</footer> <!-- end .footer -->
			
			</div>  <!-- end .site-wrapper -->
							
		<?php wp_footer(); ?>
		
	</body>
	
</html> <!-- end page -->