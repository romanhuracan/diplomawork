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
/*..............................ВСПЛЫВАЮЩЕЕ ОКНО ФОРМЫ ОБРАТНОЙ СВЯЗИ..............................*/
	$('.learn-more-btn').on('click', function(){
		$('body').prepend(`
			<div class="popup-container">
				<div id="popup">
				<button href="#" id="return-btn">Вернуться на главную</button>
				<h3>Форма обратной связи</h3>
					<form>
						<input type="text" name="name" placeholder="Имя">
						<input type="text" name="email" placeholder="Email">
						<input type="text" name="phone" placeholder="Телефон">
						<textarea placeholder="Текст обращения" maxlength="100"></textarea>
						<button class="learn-more-btn">Отправить заявку</button>
					</form>
			</div>
			</div>`)
	});

	function formHide(item){
		item.hide();
	}

	$('body').on('click', '#return-btn', function(event){
		event.preventDefault();
		let item = $(this).parents('.popup-container');
		formHide(item);
	});
});