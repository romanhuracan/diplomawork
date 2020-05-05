$(function () {

	$('#menu, #footer-menu').on('click', 'a', function(event) {
		event.preventDefault(); /* Отключает перезагрузку страницы */
		let id = $(this).attr('href'), top = $(id).offset().top;
		$('body,html').animate({scrollTop : top}, 1500)
	});

	$('.works-slider').slick({
		slidesToShow : 3,
		slidesToScroll : 3,
		responsive : [
		{
			breakpoint : 1170,
			settings : {
				slidesToShow : 3,
				slidesToScroll : 3,
				arrows : true,
				variableWidth : false
			}
		},{
			breakpoint : 1023,
			settings : {
				slidesToShow : 2,
				slidesToScroll : 2,
				arrows : false,
				dots : true,
				variableWidth : false
			}
		},{
			breakpoint : 500,
			settings : {
				slidesToShow : 1,
				slidesToScroll : 1,
				arrows : false,
				dots : true,
				variableWidth : false
			}
		}]
	});

	$('#mobile-menu').on('click', 'a', function(event) {
		event.preventDefault(); /* Отключает перезагрузку страницы */
		let mobileId = $(this).attr('href'), top = $(mobileId).offset().top;
		$('body,html').animate({scrollTop : top}, 1500)
	});

	$('.header-container__mobile-burger').on('click', function(event) {
		event.preventDefault();
		$('.header-container__mobile-menu').slideToggle(100);
	});

	$('.header-container__mobile-menu a').on('click', function(event){
		event.preventDefault();
		$('.header-container__mobile-menu ').hide();
	});
});