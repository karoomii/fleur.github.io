$(function(){
	$('.desc-box .button').click(function(){
		$('.desc-box').removeClass('fadeInUp');
		$('.img-overlay').removeClass('shrink-img');
		$('.footer-overlay').addClass('overlay-open');
		setTimeout(function(){
			$('.content-section').load('about.html');
		}, 1000);
		setTimeout(function(){
					window.scrollTo(0,0);
				}, 1000);
		$('#opening-logo').removeClass('fadeInUp');
	});
	
	$('.footer-overlay').removeClass('overlay-open');
});

$(document).ready(function(){
	var $imgoverlay = $('.img-overlay');
	var $desc = $('.desc-box');

	$imgoverlay.waypoint(function (direction) {
		if (direction == 'down') {
			$(this.element).addClass('shrink-img');
		} else {
			$(this.element).removeClass('shrink-img');
		}
	}, { offset: '100%'});

	
	$desc.waypoint(function (direction) {
	if (direction == 'down') {
		$(this.element).addClass('fadeInUp');
	} else {
		$(this.element).removeClass('fadeInUp');
	}
}, { offset: '100%'});
	
	$('#opening-logo').addClass('fadeInUp');
});

/*sprite animation*/

//$(document).ready(function(){
//	setTimeout(function(){
//		$('#logo-sprite').addClass('sprite-animation');
//	},500);
//});
//			
// $('#logo-sprite').waypoint(function (direction) {
//			if (direction == 'down') {
//				$('#logo-sprite').addClass('sprite-animation');
//			} else {
//				$('#logo-sprite').removeClass('sprite-animation');
//			}
//			 	}, { offset: '100%'});
//$('#logo-sprite').waypoint(function (direction) {
//			if (direction == 'up') {
//				$('#logo-sprite').addClass('sprite-animation');
//			} else {
//				$('#logo-sprite').removeClass('sprite-animation');
//			}
//			 	}, { offset: '-75%'});