//syntax architecture to write a jQuery plugin
(function($) {
	//extend jQuery with .slideshow()
	 $.fn.slideshow = function() {
		
		return this.each(function(){
				//my code here
				
			
				
				//add class .images
				$('#image_galleryX').find('img').addClass('images');

				var container=[];

				container= $('#image_galleryX').children();
				
				longness= container.size(),
				first = 0,
				last = longness-1,
				current = 0,
				previous = longness-1,
				next=1,
				animating = false,
				playing = true;

			
				$(container[current]).show();
			

				//Add buttons to HTML
				//$('#gallery_wrapperX').append('<div href="" class="nav_buttonsX" id="prevX">PREV</div>');
				//$('#gallery_wrapperX').append('<div href="" class="nav_buttonsX" id="playX">PLAY</div>');
				//$('#gallery_wrapperX').append('<div href="" class="nav_buttonsX" id="nextX">NEXT</div>');
				//$('.nav_buttonsX').wrapAll('<div id="navboxX">');


				$('#navboxX').show();
				$('.nav_buttonsX').show();
				
			

				// slide show functions
					//test function
					function alert_status()
					{
						alert('last '+last+', prev '+previous+', crrnt '+current+', next '+next);
					}
				
				
				function advance() {
					previous=current;
					current=next;
					if(next==last)
					{
						next=first;
					}
					else
					{
						next++;
					}
				}

				function recede() {
					next=current;
					current=previous;
					if(previous == first)
					{
						previous=last;
					}
					else
					{
						previous--;
					}
				}

				function nextdiv() {
					if(!animating)
					{
						animating = true;
				
						$(container[current]).fadeOut(800,function(){
							$(container[next]).fadeIn(1200, function(){
								advance();
								animating = false;
							})
						})
					}
				}

				function nextSlow() {
					animating = true;
					current.fadeOut(800,function(){
						nextimg.fadeIn(1100, function(){
							advance();
							animating = false;
						});
					});
				}

				function previousdiv() {
		
					if(!animating)
					{
						animating = true;
				
						$(container[current]).fadeOut(700,function(){
							$(container[previous]).fadeIn(1200, function(){
								recede();
								animating = false;
							})
						})
					}
				}

				function play() {
					setTimeout(function(){
						if(playing && !animating)
						{
							nextdiv();
							play();
						}
					},7000);
				}
				
				play();
				
				// button event handlers
				$('#nextX').click(function(){
					nextdiv();
				});

				$('#prevX').click(function(){
					previousdiv();
				});

				$('#playX').click(function(){
					playing = !playing;
					if(playing){
						if(!animating)
						{
							nextdiv();
						}
						play();
					}
				});
					
			});
		};
})(jQuery);

$('#image_galleryX').slideshow();