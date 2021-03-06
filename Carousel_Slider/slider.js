$(document).ready(function(){
	var speed = 500; //Fade speed
	var autoswitch = true;
	var autoswitch_speed = 5000; //Auto slider speed
	
	$('.slide').first().addClass('active');  //Add initial active class
	$('.slide').hide(); //Hide all slides
	$('.active').show(); //Show first slide
	
	$('#next').on('click', nextSlide);
	
	$('#prev').on('click', prevSlide);
	
	if(autoswitch == true) {
		setInterval(nextSlide,autoswitch_speed);
	}
	
	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
	
	function prevSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
	
});