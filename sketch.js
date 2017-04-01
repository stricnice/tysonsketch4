var tycir= {
	x:50,
	y:300,
	diameter:20
};


function setup(){
	createCanvas(1000,1000);
	background(255);
}

function draw(){

	ran=random(200,600);
	ran2=random(200,500);
	cz=random(210,250);

	fill(cz-150,cz-200,cz);
	ellipse(ran,ran2,tycir.diameter,tycir.diameter);
	tycir.diameter=tycir.diameter - .1;


}

function mousePressed(){

	background(0);

}
