var tl = new TimelineMax();
var tOver = new TimelineMax();
var tLegal = new TimelineMax();

var clickThrough = document.getElementById("clickThrough");

var copyTime = .5;
var iconTime = .25;


function mouseOverFunction(){
	tOver.set(cta, {css:{backgroundColor:"#000000"}});
}
	
function mouseOutFunction(){
	tOver.set(cta, {css:{backgroundColor:"#82CDAC"}});
}

clickThrough.addEventListener("mouseover", mouseOverFunction);
clickThrough.addEventListener("mouseout", mouseOutFunction);

var legalOpen = false;

tLegal.set(legalCopy, {css:{top:"600px"}});


function legalOVerFunction(){
	tLegal.to(legalCopy, .5, {css:{top:"250px"}, ease:Strong.easeOut});
	tOver.set(cta, {css:{backgroundColor:"#000000"}});
}
	
function legalOutFunction(){
	tLegal.to(legalCopy, .5, {css:{top:"600px"}, ease:Strong.easeOut});
	tOver.set(cta, {css:{backgroundColor:"#82CDAC"}});
}

legalTag.addEventListener("mouseover", legalOVerFunction);
legalCopy.addEventListener("mouseout", legalOutFunction);

function init(){
	tl.to(blocker, .5, {css:{opacity:"0"}, onComplete:playFrame1}, "+=.5")
}


function playFrame1(){
		
	blocker.style.display = "none";	
		
	// IN
	tl
	
	.to(frame1_copy1, 0, {css:{opacity:1}})
	.to(frame1_copy2, 0, {css:{opacity:1}})
	.to(frame1_copy3, 0, {css:{opacity:1}})
	.to(frame1_copy4, 0, {css:{opacity:1}})
	.to(image1, 0, {css:{opacity:1}})

	.from(image1, 1, {css:{opacity:0}, ease:Quad.easeOut}, "+=0")
	.from(frame1_copy1, .5, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")
	.from(frame1_copy2, .5, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")
	.from(frame1_copy3, .5, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")
	.from(frame1_copy4, .5, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")


	// OUT
	
	.to(frame1_copy1, .5, {css:{opacity:0}, ease:Quad.easeOut}, "+=2")
	.to(frame1_copy2, .5, {css:{opacity:0}, ease:Quad.easeOut}, "-=.5")
	.to(frame1_copy3, .5, {css:{opacity:0}, ease:Quad.easeOut}, "-=.5")
	.to(frame1_copy4, .5, {css:{opacity:0}, ease:Quad.easeOut}, "-=.5")

	.to(image1, .5, {css:{opacity:0}, ease:Quad.easeOut, onComplete:playFrame2}, "-=.5");
	
}



function playFrame2(){
		
	// IN
	tl
	
	.to(frame2_copy1, 0, {css:{opacity:1}})
	.to(frame2_copy2, 0, {css:{opacity:1}})
	.to(icon3, 0, {css:{scaleX:0, opacity:1}})

	//.to(icon2, iconTime, {css:{scaleX:0}, ease:Quad.easeOut}, "+=0")
	.to(icon3, iconTime, {css:{scaleX:1}, ease:Quad.easeOut}, "+=0")

	.from(frame2_copy1, copyTime, {css:{opacity:0}, ease:Quad.easeIn}, "+=0")
	.from(frame2_copy2, copyTime, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")
	// OUT
	
	.to(frame2_copy1, copyTime, {css:{opacity:0}, ease:Quad.easeOut}, "+=2")
	.to(frame2_copy2, copyTime, {css:{opacity:0}, ease:Quad.easeOut, onComplete:playFrame3}, "-=.5");
	
}

function playFrame3(){
		
	// IN
	tl
	
	.to(frame3_copy1, 0, {css:{opacity:1}})
	.to(frame3_copy2, 0, {css:{opacity:1}})
	.to(frame3_copy3, 0, {css:{opacity:1}})
	.to(icon4, 0, {css:{scaleX:0, opacity:1}})

	.to(icon3, iconTime, {css:{scaleX:0}, ease:Quad.easeOut}, "+=0")
	.to(icon4, iconTime, {css:{scaleX:1}, ease:Quad.easeOut}, "+=0")

	.from(frame3_copy1, copyTime, {css:{opacity:0}, ease:Quad.easeIn}, "+=0")
	.from(frame3_copy2, copyTime, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")
	.from(frame3_copy3, copyTime, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")
	// OUT
	
	.to(frame3_copy1, copyTime, {css:{opacity:0}, ease:Quad.easeOut}, "+=2")
	.to(frame3_copy2, copyTime, {css:{opacity:0}, ease:Quad.easeOut}, "-=.5")
	.to(frame3_copy3, copyTime, {css:{opacity:0}, ease:Quad.easeOut, onComplete:playFrame4}, "-=.5");
	
}

function playFrame4(){
		
	// IN
	tl
	
	.to(frame4_copy1, 0, {css:{opacity:1}})
	.to(frame4_copy2, 0, {css:{opacity:1}})
	.to(frame4_copy3, 0, {css:{opacity:1}})
	.to(icon5, 0, {css:{scaleX:0, opacity:1}})

	.to(icon4, iconTime, {css:{scaleX:0}, ease:Quad.easeOut}, "+=0")
	.to(icon5, iconTime, {css:{scaleX:1}, ease:Quad.easeOut}, "+=0")

	.from(frame4_copy1, copyTime, {css:{opacity:0}, ease:Quad.easeIn}, "+=0")
	.from(frame4_copy2, copyTime, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")
	.from(frame4_copy3, copyTime, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")
	// OUT
	
	.to(icon5, copyTime, {css:{opacity:0}, ease:Quad.easeOut}, "+=2")
	.to(frame4_copy1, copyTime, {css:{opacity:0}, ease:Quad.easeOut}, "-=.5")
	.to(frame4_copy2, copyTime, {css:{opacity:0}, ease:Quad.easeOut}, "-=.5")
	.to(frame4_copy3, copyTime, {css:{opacity:0}, ease:Quad.easeOut, onComplete:playFrame5}, "-=.5");
	
}

function playFrame5(){
		
	// IN
	tl
	
	.to(frame5_copy1, 0, {css:{opacity:1}})
	.to(frame5_copy2, 0, {css:{opacity:1}})
	.to(frame5_copy3, 0, {css:{opacity:1}})
	.to(image2, 0, {css:{opacity:1}})

	.from(image2, 1, {css:{opacity:0}, ease:Quad.easeOut}, "+=0")
	.from(frame5_copy1, .5, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")
	.from(frame5_copy2, .5, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")
	.from(frame5_copy3, .5, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")


	// OUT
	
	.to(frame5_copy1, .5, {css:{opacity:0}, ease:Quad.easeOut}, "+=2")
	.to(frame5_copy2, .5, {css:{opacity:0}, ease:Quad.easeOut}, "-=.5")
	.to(frame5_copy3, .5, {css:{opacity:0}, ease:Quad.easeOut}, "-=.5")

	.to(image2, .5, {css:{opacity:0}, ease:Quad.easeOut, onComplete:playFrame7}, "-=.5");
	
}

function playFrame7(){
	
	// IN
	tl
	
	.to(frame7_copy1, 0, {css:{opacity:1}})
	.to(frame7_copy2, 0, {css:{opacity:1}})
	.to(frame7_copy3, 0, {css:{opacity:1}})
	.to(frame7_copy4, 0, {css:{opacity:1}})
	.to(frame7_copy5, 0, {css:{opacity:1}})
	.to(frame7_copy6, 0, {css:{opacity:1}})
	.to(frame7_copy7, 0, {css:{opacity:1}})
	.to(frame7_copy8, 0, {css:{opacity:1}})
	.to(legalTag, 0, {css:{opacity:1, zIndex:200}})
	.to(hum_logo, 0, {css:{opacity:1}})
	.to(cta, 0, {css:{opacity:1}})
	.to(cta_copy, 0, {css:{opacity:1}})

	.from(hum_logo, .5, {css:{opacity:0}, ease:Quad.easeOut}, "+=0")
	.from(frame7_copy1, copyTime, {css:{opacity:0}, ease:Quad.easeIn}, "+=0")
	.from(frame7_copy2, copyTime, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")
	.from(frame7_copy3, copyTime, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")
	.from(frame7_copy4, copyTime, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")
	.from(frame7_copy5, copyTime, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")
	.from(frame7_copy6, copyTime, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")
	.from(frame7_copy7, copyTime, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")
	.from(frame7_copy8, copyTime, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")
	
	.from(legalTag, copyTime, {css:{opacity:0}, ease:Quad.easeIn}, "-=.25")

	.from(cta, copyTime, {css:{opacity:0}, ease:Quad.easeIn}, "+=0")
	.from(cta_copy, copyTime, {css:{opacity:0}, ease:Quad.easeIn}, "-=.5")
	;
			
}

init();