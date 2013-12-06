			<footer class="footer" role="contentinfo">
			
				<div id="inner-footer" class="row clearfix">
				
					<div class="large-12 medium-12 columns">
						<nav role="navigation">
    						<?php joints_footer_links(); ?>
    					</nav>
    				</div>
	               
	                <div class="large-12 medium-12 columns">		
						<p class="source-org copyright">&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>.</p>
					</div>
				
				</div> <!-- end #inner-footer -->
				
			</footer> <!-- end footer -->
		
		</div> <!-- end #container -->
		</div>
		</div>
				
		<!-- all js scripts are loaded in library/joints.php -->
		<?php wp_footer(); ?>

<script>
	(function($) {
		$(document).foundation();
	})(jQuery);
</script>


	</body>

</html> <!-- end page -->
