function setup(){
	createCanvas(windowWidth, windowHeight);
	p1 = new Photon();
	p2 = new Photon();
}


function draw(){
	background("black");
	p1.walk();
	p1.display();
	p2.walk();
	p2.display();
}

class Photon {
	constructor() {
		this.x = width/2
		this.y = width/2
	}
	walk(){
	this.x = this.x + random(-10,10)
	this.y = this.y + random(-10,10)
	}
	display(){
		fill(255);
		ellipse(this.x, this.y, 34,34);
	}
}