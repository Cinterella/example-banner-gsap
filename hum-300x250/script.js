var tl = new TimelineMax();
var tOver = new TimelineMax();
var tLegal = new TimelineMax();

var clickThrough = document.getElementById("clickThrough");

function mouseOverFunction(){
	tOver.set(cta, {css:{backgroundColor:"#000000"}});
}
	
function mouseOutFunction(){
	tOver.set(cta, {css:{backgroundColor:"#82CEAC"}});
}

clickThrough.addEventListener("mouseover", mouseOverFunction);
clickThrough.addEventListener("mouseout", mouseOutFunction);

var clickLegal = document.getElementById("clicklegal");

function mouseOverFunction2(){
	 tLegal.to(legal, 1, {css:{left:"-300px", opacity:1}, ease:Strong.easeOut}, "-=.5")
     tLegal.to(legal, 1, {css:{left:"0px", opacity:1}, ease:Strong.easeOut}, "-=.5")

}
	
function mouseOutFunction2(){
	tLegal.to(legal, 1, {css:{left:"0px", opacity:1}, ease:Strong.easeOut}, "-=.5")
	tLegal.to(legal, 1, {css:{left:"-300px", opacity:1}, ease:Strong.easeOut}, "-=.5")
}

clickLegal.addEventListener("mouseover", mouseOverFunction2);
clickLegal.addEventListener("mouseout", mouseOutFunction2);
/*
var legalOpen = false;

tLegal.set(legalCopy, {css:{top:"+=250px"}});


function legalOVerFunction(){
	tLegal.to(legalCopy, .5, {css:{top:"80px"}, ease:Strong.easeOut});
	tOver.set(cta, {css:{backgroundColor:"#000000"}});
}
	
function legalOutFunction(){
	tLegal.to(legalCopy, .5, {css:{top:"+=250px"}, ease:Strong.easeOut});
	tOver.set(cta, {css:{backgroundColor:"#82CDAC"}});
}

legalTag.addEventListener("mouseover", legalOVerFunction);
legalCopy.addEventListener("mouseout", legalOutFunction);
*/

function init(){
	
	tl.to(blocker, .5, {css:{opacity:0}, onComplete:playAnimation}, 0);
	
}


function playAnimation(){
		
	blocker.style.display = "none";	
	
	tl

	.to(frame1_icon, .5, {css:{scale:0}, ease:Strong.easeInOut}, "+=1")
	.to(frame1_copy, .5, {css:{scale:0}, ease:Strong.easeInOut}, "-=.5")
	
	.to(frame2_icons, .5, {css:{opacity:1}, ease:Strong.easeInOut}, "-=.5")
	.from(frame2_icons, .5, {css:{scale:20}, ease:Strong.easeInOut}, "-=.5")
	
	.to(frame2_icons, .5, {css:{scale:1.24, left:"129px", top:"-139px", opacity:0}, ease:Strong.easeOut}, "+=.5")
	.to(frame3_icon, .5, {css:{scale:1, left:"0px", top:"0px", opacity:1}, ease:Strong.easeOut}, "-=.5")
	.to(background, .5, {css:{opacity:1}, ease:Strong.easeInOut}, "-=.5")

	.to(frame3_copy, .75, {css:{opacity:1, left:"10px"}, ease:Strong.easeIn}, "-=.5")
	.to(frame3_copy, .25, {css:{opacity:1, left:"0px"}, ease:Strong.easeOut}, "+=0")
	
	.to(frame3_icon, .25, {css:{scaleX:0}, ease:Strong.easeIn}, "+=1.25")
	.to(frame4_icon, .25, {css:{scaleX:1}, ease:Strong.easeOut}, "+=0")
	
	.to(frame3_copy, 1, {css:{opacity:1, left:"300px"}, ease:Strong.easeInOut}, "-=1")
	.to(frame4_copy, .75, {css:{opacity:1, left:"10px"}, ease:Strong.easeIn}, "-=.5")
	.to(frame4_copy, .25, {css:{opacity:1, left:"0px"}, ease:Strong.easeOut}, "+=0")

	.to(frame4_icon, .25, {css:{scaleX:0}, ease:Strong.easeIn}, "+=1.25")
	.to(frame5_icon, .25, {css:{scaleX:1}, ease:Strong.easeOut}, "+=0")
	
	.to(frame4_copy, 1, {css:{opacity:1, left:"300px"}, ease:Strong.easeInOut}, "-=1")
	.to(frame5_copy, .75, {css:{opacity:1, left:"10px"}, ease:Strong.easeIn}, "-=.5")
	.to(frame5_copy, .25, {css:{opacity:1, left:"0px"}, ease:Strong.easeOut}, "+=0")
	
	.to(frame6_copy, .75, {css:{opacity:1, left:"10px"}, ease:Strong.easeIn}, "+=1.25")
	.to(frame6_copy, .25, {css:{opacity:1, left:"0px"}, ease:Strong.easeOut}, "+=0")

	.to([frame5_copy, frame6_copy], 1, {css:{opacity:1, left:"300px"}, ease:Strong.easeInOut}, "+=1.25")
	.to(frame5_icon, .25, {css:{scaleX:0}, ease:Strong.easeIn}, "-=.5")

	.to(frame7_logo, .25, {css:{scaleX:1}, ease:Strong.easeInOut}, "-=.25")
	.to(frame7_copy, 1, {css:{top:"-3px"}, ease:Strong.easeInOut}, "+=0")
	.to(frame7_copy, .25, {css:{top:"0px"}, ease:Strong.easeOut}, "+=0")
	.to(frame7_logo, 1, {css:{top:"0px"}, ease:Strong.easeInOut}, "-=1")

	.to(cta, .5, {css:{opacity:1}, ease:Strong.easeInOut}, "-=.5")
	.to(details, .5, {css:{opacity:1}, ease:Strong.easeInOut}, "-=.5")
	.to(clicklegal, 1, {css:{left:"121px", opacity:0}, ease:Strong.easeOut}, "-=.5")
	.to(frame7_cta_copy, .5, {css:{opacity:1}, ease:Strong.easeInOut}, "-=.5")
	
}

init();