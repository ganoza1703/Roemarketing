jQuery(document).ready(function($) {
	$('.bar__menu__mobile').click(function(event) {
		let id = $(this).attr('data-id');
		if (id == 0){
			$('.menu__mobile__bg').addClass('change__bg__left__active').removeClass('change__bg__left__non');
			$('body').css("overflow","hidden");
			$(this).attr('data-id',++id);
		}else{
			$('.menu__mobile__bg').addClass('change__bg__left__non').removeClass('change__bg__left__active');
			$('body').css("overflow","auto");
			$(this).attr('data-id',--id);
		}
	});
});