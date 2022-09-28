jQuery(document).ready(function($){
	
	$(document).on('click', '.header .header-row .header-row-menu-search .menu_icon', function(e){
		e.preventDefault(); 
		if( $(window).width() <= 991 ) { 
			$('.header .header-row .header-row-menu-search .dropdown .dropdown-content').slideToggle(); 
		}
		return false;
	});
	

	// Window Resize
	$(window).on('load resize', function() {
		if( $(window).width() >= 992 ) {
			$('.header .header-row .header-row-menu-search .dropdown .dropdown-content').css('display', ''); 
		}
	});
	
});