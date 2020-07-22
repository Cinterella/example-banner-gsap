var tl = new TimelineMax();

function enableClickThrough(){
	blocker.style.display = "none";
}

function init(){
	
	tl.to(blocker, .5, {css:{opacity:0}, onComplete:enableClickThrough})
	
	// FRAME 1
	
	.to(yellow, 0.5, {css:{bottom:"-20px"}, ease:Strong.ease}, "0")
	.to(image1, 3, {css:{top:"-80px"}, ease:Strong.ease}, "0.5")
	
	.from(copy_bg, 1, {css:{opacity:0, top:"50px"}, ease:Strong.easeOut}, "1.3")
	.from(copy, 0.5, {css:{scale:1.5}, ease:Back.easeOut}, "1.5")
	.from(copy, 2, {css:{opacity:0}, ease:Back.easeOut}, "1.5")
	.from(cta, 1, {css:{opacity:0}, ease:Strong.easeOut}, "2.3")
		
	// FRAME 2
		
	.to(image1, 0.5, {css:{opacity:0}, }, "3")
	.from(image2, 3, {css:{top:"-90px"}, ease:Strong.ease}, "3")

	;
}

init();