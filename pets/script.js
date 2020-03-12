// JavaScript Document


$(document).ready(function(){
  
    $(window).scroll(function(){
        if ($(this).scrollTop() > 20) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
        });
          
        $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
  
});



$(function(){
  $('.slider').glide({
    autoplay: 3500,
    hoverpause: true,
    arrowRightText: '&rarr;',
    arrowLeftText: '&larr;'
  });
});



function readMore(){
var empty = document.getElementById("empty");
 var more = document.getElementById("more");
  var btn = document.getElementById("btn");
      if (empty.style.display === "none"){
          empty.style.display = "inline";
          btn.innerHTML = "More";
          more.style.display = "none";
      } 
      else{
        empty.style.display ="none";
        btn.innerHTML = "Less";
        more.style.display = "inline"; 
    }
}


function readMore1(){
var empty1 = document.getElementById("empty1");
 var more1 = document.getElementById("more1");
  var btn1 = document.getElementById("btn1");
      if (empty1.style.display === "none"){
          empty1.style.display = "inline";
          btn1.innerHTML = "More";
          more1.style.display = "none";
      } 
      else{
        empty1.style.display ="none";
        btn1.innerHTML = "Less";
        more1.style.display = "inline"; 
    }
}



(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open').find('.menu__links').slideToggle();
    });
    
    $('.menu__links-item').on('click', function() {
      $(this).closest('.menu')
        .removeClass('menu_state_open').find('.menu__links').slideToggle();
    });
	
	// Window Resize
	$(window).on('load resize', function() {
		if( window.innerWidth >= 768 ) {
			$('.menu__links').css('display','');
		}
	});
	
  });
})(jQuery);
