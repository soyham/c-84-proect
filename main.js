// Create a reference for the canvas
canvas=document.getElementById('mycanvas');
ctx=canvas.getContext(2d);
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown",my_keydown);


function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
		{
			aplhabetkey();
			document.getElementById9=("d1").innerHTML="You pressed Alphabet key";
			console.log("alphabetkey");
		}
		
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		console.log("other key");
	}

	if(keyPressed >=48 && keyPressed<=57)
		//write a code to check the type of key pressed
		{
			numberkey();
			document.getElementById9=("d1").innerHTML="You pressed Number key";
			console.log("Numberkey");
		}

		if(keyPressed >=37 && keyPressed<=40)
		//write a code to check the type of key pressed
		{
			arrowkey();
			document.getElementById9=("d1").innerHTML="You pressed Arrow key";
			console.log("Arrowkey");
		}

		if(keyPressed==17)
		//write a code to check the type of key pressed
		{
			specialkey();
			document.getElementById9=("d1").innerHTML="You pressed Special key";
			console.log("Specialkey");
		}

		if(keyPressed==18)
		//write a code to check the type of key pressed
		{
			specialkey();
			document.getElementById9=("d1").innerHTML="You pressed Special key";
			console.log("Specialkey");
		}

		if(keyPressed==27)
		//write a code to check the type of key pressed
		{
			specialkey();
			document.getElementById9=("d1").innerHTML="You pressed Special key";
			console.log("Specialkey");
		}

}

function aplhabetkey()
{
	img_image="Alpkey.png";
add();
}
function numberkey()
{
	img_image="numkey.png";
add();
}
function arrowkey()
{
	img_image="Arrkey.png";
add();
}
function specialkey()
{
	img_image="spkey.png";
add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
