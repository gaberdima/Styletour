$(function(){
	$('.carousel').carousel({
		 interval: false
	})

	$('.search').on('click', function(){
		$('.main-menu .navbar-form').slideToggle();
	})
	$('#elastislide').elastislide();
});

$(window).load(function(){
	var carouselCaptionWidts = $('#carousel-sidebar .active img').width();
	console.log(carouselCaptionWidts);
	$('#carousel-sidebar img').each(function(){
		$(this).attr('width', carouselCaptionWidts);
	})
	$('#carousel-sidebar .sidebar-carousel-caption').css('max-width', carouselCaptionWidts + 'px');
	$('#carousel-sidebar .carousel-indicators').css('max-width', carouselCaptionWidts +'px');
	$('.sidebar .banner').css('max-width', carouselCaptionWidts +'px');
	//$('.about').css('max-width', carouselCaptionWidts +'px'); або padding-right: 35px;
})
