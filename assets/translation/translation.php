<?php
/*
Thanks to the awesome work by JointsWP users, there
are many languages you can use to translate your theme.
*/

// Adding Translation Option
add_action('after_setup_theme', 'load_translations');
function load_translations(){
	load_theme_textdomain( 'jointstheme', get_template_directory() .'/assets/translation' );
	
	$locale = get_locale();
	$locale_file = get_template_directory() ."/assets/translation/$locale.php";
	if ( is_readable($locale_file) ) require_once($locale_file);
}
?>