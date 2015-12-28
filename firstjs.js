/**
 * Created by Catbus on 12/27/2015.
 */
background(218, 252, 133);

fill(117, 55, 5); //roof
triangle(200, 28, 350, 150, 50, 150);


draw = function(){
	var xPos = 275;
	var yPos = 57;
	fill(166, 164, 138);
	stroke(163, 146, 146);
	ellipse(xPos, yPos, 24, 25);
	xPos +=1;
	yPos +=1;

};



rect(262, 57, 24, 50);  //chimney
for (var a = 263; a < 283; a+=7){
	for (var z = 59; z < 102; z+=7){
		stroke(3, 3, 3);
		fill(207, 45, 12);
		rect(a, z, 8, 5);
	}
}

fill(255, 255, 255);   //house square
rect(60, 149, 280, 207);


for (var b = 60; b < 339; b+=7){  //bricks
	for (var c = 152; c < 353; c+=7){
		stroke(3, 3, 3);
		fill(207, 45, 12);
		rect(b, c, 8, 5);
	}

}

fill(173, 48, 7);  //door
rect(180, 279, 40, 77);
fill(255, 196, 0);  //doorknob
ellipse(214, 320, 5,5);


for (var x = 92; x <320; x +=62){  //windows
	//println("there");
	fill(171, 161, 171);
	rect(x, 178, 30, 30);

	for (var e = 81; e <343; e+=40){  //vigas
		fill (194, 75, 35);
		ellipse(e, 163, 12,12);
	}
}

for (var g = 0; g <400; g +=3){  //grass
	stroke (142, 194, 37);
	line(g, 400, g, 383);
}
for (var f = 21; f < 392; f+=60){  //flowers
	stroke (142, 194, 37);
	strokeWeight(4);
	line(f, 400, f, 376);
	strokeWeight(2);
	fill(140, 48, 140);
	ellipse(f, 376, 10,10 );
}

