function delayScrollAnime() {
	var time = 0.2;
	var value = time;
	$('.delayScroll').each(function () {
		var parent = this;
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var childs = $(this).children();

		if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
			$(childs).each(function () {

				if (!$(this).hasClass("fadeUp")) {

					$(parent).addClass("play");
					$(this).css("animation-delay", value + "s");
					$(this).addClass("fadeUp");
					value = value + time;


					var index = $(childs).index(this);
					if((childs.length-1) == index){
						$(parent).removeClass("play");
					}
				}
			})
		}else {
			$(childs).removeClass("fadeUp");
			value = time;
		}
	})
}


	$(window).scroll(function (){
		delayScrollAnime();
	});


	$(window).on('load', function(){
		delayScrollAnime();
	});
