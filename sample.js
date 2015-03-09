var hankei = 0;
var a = 0;
function setup(){
	pbCtx.clearRect(0,0,screenWidth,screenHeight);
	pbCtx.beginPath();
	pbCtx.moveTo(screenWidth/2,screenHeight/2);
	for(var a = 0;a < 360 * 5;a++){
		pbCtx.lineTo(	screenWidth/2+hankei*Math.cos(a/180*Math.PI),
						screenHeight/2-hankei*Math.sin(a/180*Math.PI));
		hankei = hankei + 70/360;
	}
	pbCtx.stroke();
	
	pbCtx.beginPath();
	pbCtx.moveTo(screenWidth/2,screenHeight/2);
	pbCtx.lineTo(screenWidth/2+140,screenHeight/2);
	pbCtx.stroke();
}

function loop(){
//	pbCtx.clearRect(0,0,screenWidth,screenHeight);
//	pbCtx.beginPath();
//	pbCtx.moveTo(screenWidth/2,screenHeight/2);
//	for(var a = 0;a < 360 * 5;a++){
//		pbCtx.lineTo(	screenWidth/2+hankei*Math.cos(a/180*Math.PI),
//						screenHeight/2-hankei*Math.sin(a/180*Math.PI));
//		hankei = hankei + 50/360;
//	}
	
//	pbCtx.stroke();
//	a = a+1
		
}

function onPressed(n){

}

function onMove(n){
	
}

function onReleased(n){

}
