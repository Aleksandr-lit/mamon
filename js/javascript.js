$(document).ready(function () {
	$('.header__burger,.nav>li').click (function(event) {
		$('.header__burger,.nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

function backToTop() {
	let button = $('.back-to-top');

	$(Window).on('scroll', () => {
		if ($(this).scrollTop() >= 50) {
			button.fadeIn();
		} else {
			button.fadeOut();
		}
	});

	button.on('click', (e) => {
		e.preventDefault();
		$('html').animate({scrollTop: 0});
	});
}
backToTop();
// var timeOut;
// function goUp() {
//    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
//    if(top > 0) {
//       window.scrollBy(0,-100);
//       timeOut = setTimeout('goUp()',20);
//    } else clearTimeout(timeOut);
// }
// window.onscroll = function() {
//    var scrollElem = document.getElementById("scrollToTop");
//    if (document.body.scrollTop >= document.documentElement.clientHeight) {
//       scrollElem.style.opacity = "1";
//    } else {
//       scrollElem.style.opacity = "0";
//    }
// }