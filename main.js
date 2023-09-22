canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencarWidth = 75;
greencarHeight = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencarX = 5;
greencarY = 225;

function add() 
{
	backgroundImgTag = new Image();
	backgroundImgTag.onload = uploadBackground;
	backgroundImgTag.src = backgroundImage;

	greencarImgTag = new Image();
	greencarImgTag.onload = uploadGreenCar;
	greencarImgTag.src = greencarImage;
}

function uploadBackground() 
{
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.height);
}

function uploadGreenCar()
{
	ctx.drawImage(greencarImgTag, greencarX, greencarY, greencarWidth, greencarHeight);	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
    if(greencarY >=0)
    {
        greencarY = greencarY - 10;
        console.log("Quando a seta para cima é pressionada, x = " + greencarX + " | y = " + greencarY);
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
    if(greencarY <=500)
    {
        greencarY = greencarY+ 10;
        console.log("quando a seta para baixo é pressionada, x = " + greencarX + "| y = " +greencarY);
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
    if(greencarX >=0)
    {
        greencarX = greencarX - 10;
        console.log("quando a seta para esquerda é pressionada, x = " + greencarX + "| y = " +greencarY);
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
    if(greencarX <=700)
    {
        greencarX = greencarX + 10;
        console.log("quando a seta para direita é pressionada, x = " + greencarX + "| y = " +greencarY);
        uploadBackground();
        uploadgreencar();
    }
}