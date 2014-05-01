$(document).ready(function(){

	var animating1=false,
	on=false;
	$(".gallerylink").mouseover(function(){
		$(this).children('a'>'img').css({'z-index': '0', opacity: '.8'});
		$(this).children(":header").css({'z-index': '10', opacity: '1', top: '230px', color: 'black'});
	});
	$(".gallerylink").mouseout(function(){
		$(this).children('a'>'img').css({'z-index': '0', opacity: '1'});
		$(this).children(":header").css({top: '240px', color: 'black' });
	});

	$('#FULL_GALLERY a').click(function(e) {
	        e.preventDefault();
	    });
	
	$('a.nofollow').click(function(e) {
	        e.preventDefault();
	    });
	

	$('#test_close').hover(function(){
		$('#test_close').attr({src: 'images/closed.png'});
	}, function(){$('#test_close').attr({
		src: 'images/close.png'
	});
});

$('#test_close').click(function(){
	$('#SHADOW').css('display','none');
	$('#test').css('display','none');
	$('#test_close').css('display','none');
	$('#loadbox').css('display','none');
	$('#loading').css('display','none');
});

$('#test').click(function(){
	$('#SHADOW').css('display','none');
	$('#test').css('display','none');
	$('#test_close').css('display','none');
	$('#loadbox').css('display','none');
	$('#loading').css('display','none');
});

$('#FULL_GALLERY img').hover(function(){
	$(this).css('opacity','.7');
}, function(){
	$('#FULL_GALLERY img').css('opacity','1');
});

$('#FULL_GALLERY img').click(function(){
	$('#loadbox').css('display','block');
	$('#loading').css('display','block');
	$('#test').attr('src', $(this).parent().attr('href') );
	$('#test').load(function(){
		$('#test').css('display', 'block');
		});
	$('#SHADOW').css('display','block');
	$('#test_close').css('display','block');
	
});

});