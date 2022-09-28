jQuery(document).ready(function($){
	
	$(document).on('click', '.header .header-menu .menu_icon', function(e){
		e.preventDefault(); 
		if( $(window).width() <= 991 ) { 
			$('.header .header-menu .dropdown .dropdown-content').slideToggle(); 
		}
		return false;
	});
	

	// Window Resize
	$(window).on('load resize', function() {
		if( $(window).width() >= 992 ) {
			$('.header .header-menu .dropdown .dropdown-content').css('display', ''); 
		}
	});
	
});