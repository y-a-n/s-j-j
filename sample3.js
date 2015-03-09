var xx = 0;
var yy = 0;

var xmuki = 5;
var ymuki = 5;

function setup(){
}

function loop(){
	
	pbCtx.clearRect(0,0,screenWidth,screenHeight);
	pbCtx.beginPath();
	pbCtx.arc(xx,yy,10,0,Math.PI*2,true);
	pbCtx.fill();
	
	xx = xx + xmuki;
	yy = yy + ymuki;
	
	if(xx+10>screenWidth){
	xmuki = -5;
	}
	
	if(yy-10>screenHeight){
	ymuki = -5;
	}

	if(xx-10<0){
	xmuki = 5;
	}
	
	if(yy-10<0){
	ymuki = 5;
	}


}

function onPressed(n){

}

function onMove(n){
	
}

function onReleased(n){

}
