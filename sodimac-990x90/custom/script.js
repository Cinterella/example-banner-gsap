var tl = new TimelineMax();
var tl_fire1 = new TimelineMax();
var tl_fire2 = new TimelineMax();

function getTime(){
	console.log(tl.totalTime());
}

function init() {

	TweenLite.set("#snowflakes",{perspective:500})

	var total = 12;
	//var warp = document.getElementById("container"),	w = window.innerWidth , h = window.innerHeight;
	var warp = document.getElementById("snowflakes"),	w = 120 , h = 90;
	 
	 for (i=0; i<total; i++){ 
	   var Div = document.createElement('div');
	   TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-100,-210),z:R(-30,30)});
	   warp.appendChild(Div);
	   animm(Div);
	 }
	 
	 function animm(elm){   
	   TweenMax.to(elm,R(8,12),{y:h+70,ease:Linear.easeNone,repeat:1,delay:-10});
	   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:1,yoyo:true,ease:Sine.easeInOut});
	   TweenMax.to(elm,R(2,6),{rotationX:R(0,360),rotationY:R(0,360),repeat:1,yoyo:true,ease:Sine.easeInOut,delay:-8});
	 };

	function R(min,max) {return min+Math.random()*(max-min)};


	// FRAME 1
	tl.from(main_content, 0.5, {css:{opacity: 0}})

	tl.to([bg, fire_1,fire_3,fire_5,fire_7,fire_2,fire_4,fire_6,fire_8, logo], 0.5, {css:{opacity: 1} })

	tl_fire1.from([fire_1,fire_3,fire_5,fire_7], 0.3, {css:{transform: "scaleY(0.9)"},repeat:-1,yoyo:true,ease:Sine.easeInOut})
	tl_fire2.from([fire_2,fire_4,fire_6,fire_8], 0.5, {css:{transform: "scaleY(0.9)"},repeat:-1,yoyo:true,ease:Sine.easeInOut})
	.to(fire, .5, {css:{opacity: 1, transform: "scaleY(1.02)"}, ease: Strong.easeOut}, "-=1")

	tl.to(txt0, 1, {css:{opacity: 1}, ease: Power1.easeOut}, "+=1")
	tl.to(txt0, 1, {css:{opacity: 0}, ease: Power1.easeOut}, "+=1.5")

	.to(txt1, 1, {css:{opacity: 1}, ease: Power1.easeOut}, "-=0.5")
	.to(txt1, 1, {css:{opacity: 0}, ease: Power1.easeOut}, "+=1.5")

	.to(txt2, 1, {css:{opacity: 1}, ease: Power1.easeOut}, "-=0.5")
	.to(txt2, 1, {css:{opacity: 0}, ease: Power1.easeOut}, "+=1.5")

	.to(txt3, 1, {css:{opacity: 1}, ease: Power1.easeOut}, "+=0")
	.to(cta, 1.5, {css:{opacity: 1}, ease: Power1.easeOut}, "+=0")


	.seek('pointer')
	
	.call(getTime)
	
	;
	
}

init();