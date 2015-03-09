function setup(){

	pbCtx.beginPath();	//描画を開始する
	pbCtx.lineWidth = 20;
	pbCtx.strokeStyle = 'rgb(200, 80, 50)';	//線の色を、赤200、緑80、青50にする
	pbCtx.arc(400,300,100,-Math.PI*30/180,Math.PI*40/180,false);
	pbCtx.stroke();
	
	pbCtx.beginPath();
	pbCtx.lineWidth = 1;
	pbCtx.strokeStyle = 'rgb(0, 0, 0)';	//線の色を、赤200、緑80、青50にする
	pbCtx.moveTo(0,300);
	pbCtx.lineTo(1000,300);
	pbCtx.stroke();
	
	pbCtx.beginPath();
	pbCtx.lineWidth = 1;
	pbCtx.strokeStyle = 'rgb(0, 0, 0)';	//線の色を、赤200、緑80、青50にする
	pbCtx.moveTo(400,0);
	pbCtx.lineTo(400,1000);
	pbCtx.stroke();

}

function loop(){
	
}

function onPressed(n){

}

function onMove(n){
	
}

function onReleased(n){

}
