var tl = new TimelineMax();

var clickThrough = document.getElementById("clickThrough");

function init(){
	tl.to(blocker, .5, {css:{opacity:0}, onComplete:playAnimation}, 0);
}


function playAnimation(){
		
	blocker.style.display = "none";	
	
	tl
	.to(frame1_bkg1, 5, {css:{scale:1}, ease:Power2.easeOut}, "+=0")
	.to(frame1_copy1, 3, {css:{opacity:1, left: 0}, ease:Strong.easeInOut}, "-=6")

	.to(frame1_bkg1, .5, {css:{opacity:0}, ease:Strong.easeInOut}, "-=1")
	.to(frame1_copy1, .5, {css:{opacity:0}, ease:Strong.easeInOut}, "-=1")

	.to(frame2_bkg1, 5, {css:{scale:1}, ease:Power2.easeOut}, "-=1")
	.to(frame2_copy1, 3, {css:{opacity:1, left: 0}, ease:Strong.easeInOut}, "-=5.5")

	.to(frame2_bkg1, .5, {css:{opacity:0}, ease:Strong.easeInOut}, "-=1")
	.to(frame2_copy1, .5, {css:{opacity:0}, ease:Strong.easeInOut}, "-=1")


	.to(frame3_bkg1, 5, {css:{scale:1}, ease:Power2.easeOut}, "-=1")
	.to(frame3_copy1, 3, {css:{opacity:1, top: 0}, ease:Strong.easeInOut}, "-=5.5")

	.to(frame3_bkg1, .5, {css:{opacity:0}, ease:Strong.easeInOut}, "-=1")
	.to(frame3_copy1, .5, {css:{opacity:0}, ease:Strong.easeInOut}, "-=1")

	.to(frame4_bkg1, 5, {css:{scale:1.1}, ease:Power2.easeOut}, "-=1")
	.to(frame4_copy1, 3, {css:{scale:1, opacity:1}, ease:Strong.easeInOut}, "-=5.5")

	.to(frame4_copy1, .5, {css:{opacity:0}, ease:Strong.easeInOut}, "-=1")
	
	.to(frame5_copy1, 1, {css:{opacity:1, top:0}, ease:Strong.easeInOut}, "-=1")

	.to(frame5_copy2, 1, {css:{opacity:1, top:0}, ease:Strong.easeInOut}, "-=1")

	.to(cta, .5, {css:{opacity:1, top:0}, ease:Strong.easeInOut}, "+=0")

}

init();