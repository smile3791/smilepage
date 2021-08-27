/* anchor slider */
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html, body').animate({
		  scrollTop: target.offset().top
		}, 1000);
		return false;
	  }
	}
  });
});

/* var */
var winH = $(window).height();

/* content scrollSpy */
function scrollSpy() {
	var item = ['about', 'web', 'graphic', 'codepen_io'];
	var scrollPos = $(window).scrollTop();
	var current;
	var linkSet;
	
	var aboutTop = $('.about').offset().top;
	var mainH = $('#main').outerHeight();
	var rateBar = scrollPos/(mainH - winH)*100;
		$('.rate span').height(rateBar + '%');
	
	for (var i = 0; i < item.length; i++) {	
		var itemTop = $('#'+item[i]).offset().top;
		var itemBtm = $('#'+item[i]).offset().top + $('#'+item[i]).outerHeight();
		current = item[i];
		if ( itemTop - winH/3*2 <= scrollPos && scrollPos <= itemBtm + winH/5 ) {
			$('#' + current).addClass('active');
			if(i > 0) { $('.rate-prev').attr('href','#' + item[i-1]); } else { $('.rate-prev').attr('href','#main'); }
			if(i < 3) { $('.rate-next').attr('href','#' + item[i+1]); } else { $('.rate-next').attr('href','#codepen_io'); }
			linkSet = item[i];
		} else {
		$('#' + current).removeClass('active');
		}
	}
	$('.link-btn').removeClass('active'); 
	$('.link-btn[data-name="' + linkSet + '"]').addClass('active');
	
	
	/* main */
	if ( scrollPos >= aboutTop - winH/4*3 ) {
		$('.above').addClass('show');
		$('.rate').addClass('active');
	} else {
		$('.above').removeClass('show');
		$('.rate').removeClass('active');
		$("#nav_chk").prop("checked",false);
	}

}


/* banner Zoom */
function bannerZoom() {
	var scrollPos = $(window).scrollTop();
	var bnBottom = $('.banner').offset().top + $('.banner').outerHeight();

	var zoom =((winH*0.5)/(scrollPos + winH*0.5))*1.6;
	
	if ( zoom >= 1 ) { zoom = 1; };
	$('.banner .img-cont').css({'width': zoom*100 + 'vw', 'height': zoom*100 + 'vh'});
	if ( scrollPos >= bnBottom*0.85 ) {
		$('.banner').removeClass('active');
		} else {
		$('.banner').addClass('active');
	}
	if ( zoom <= 0.6 ) {
		$('.banner .img-cont').css('opacity', 0);
		$('.banner .intro-word').removeClass('white');	
	} else {
		$('.banner .img-cont').css('opacity', 1);
		$('.banner .intro-word').addClass('white');
	}
}
	

/* lightGallery */
$('.graphic .item-cont').lightGallery({
	mode:'lg-scale-up',
	download:false,
}); 


/* media 800 */
var mqWidth = window.matchMedia('(max-width:800px)');

function resizeWidth(winMedia){
	if (!winMedia.matches) { sliderShow(); }
}
mqWidth.addListener(resizeWidth);


/* swiper */
function sliderShow(){
	var item = ['web', 'codepen_io'];
	for (var i = 0; i < item.length; i++) {	
		zone = '#' + item[i];
		swiperList(zone);
	}
}

	function swiperList(list){
		var swiper = new Swiper(list + ' .swiper-container', {
			slidesPerView:2.5,
			effect:'slide',
			roundLengths:true,
			/* centeredSlides:true, */
			slidesOffsetBefore:20,
			slidesOffsetAfter:20,
			spaceBetween: 12,
			speed:400,
			observer:true,
			observeParents:true,
			navigation: {
				nextEl: list + ' .swiper-button-next',
				prevEl: list + ' .swiper-button-prev',
			},
			pagination: {
				el: list + ' .swiper-pagination',
				clickable :true,
			},
			
			breakpoints: {
				1440: {
					slidesPerView:1.5,
				},
			},
		});
	}


/* document */
$(document).ready( function() {
	scrollSpy(); 
	bannerZoom();
	resizeWidth(mqWidth);
});

$(window).scroll( function() {
	scrollSpy();
	bannerZoom();
});

$( window ).resize(function() {
	resizeWidth(mqWidth);
	mqWidth.addListener(resizeWidth);
});

/* menu link-btn click */
$(".link-btn").click(function(){
	$("#nav_chk").prop("checked",false);
});

