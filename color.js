var lvl = 6;
var colors = [];
var pickedColor;

// select all squares
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h2 = document.querySelector("h2");
var resetButton = document.querySelector("#reset");
var lvlButtons = document.querySelectorAll(".lvl");

init();

function init() {
	// lvl buttons 
	setLvl();
	// squares
	setSquares();

	reset();
}

function setLvl() {
	for (i =0; i <lvlButtons.length; i++) {
		lvlButtons[i].addEventListener("click", function() {
			lvlButtons[0].classList.remove("selected");
			lvlButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? lvl = 3: lvl = 6;
			/*if (this.textContent === "Easy") {
				lvl = 3;
			} else lvl = 6;*/
			reset();
		});
	}
}

function setSquares() {
	for (var i = 0; i < squares.length; i++) {
	// add click listeners to squares
		squares[i].addEventListener("click", function() {
			// grab color of picked square
			var quess = this.style.backgroundColor;
			// compare color to pickedColor
			if (quess === pickedColor) {
				messageDisplay.textContent = "CORRECT!!"
				// match quess color for every square
				changeColors(pickedColor);
				h2.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play again!";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again"
			}
		});
	};
}


function reset() {
	// generate new colors
	colors = generateRanColors(lvl);
	// pick new color
	pickedColor = pickColor();
	// change color Display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change colors of squares
	for(i =0; i<squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display = "none";
		}
		
	}
	// reset h2 background color
	h2.style.backgroundColor = "steelblue";

}

// new game button 
resetButton.addEventListener("click", function() {
	reset();
});


// change all squares background color
function changeColors(color) {
	// loop squares
	squares.forEach(function(el) {
		el.style.backgroundColor = color;
	});
}

// pick random color
function pickColor() {
	var random = Math.floor(Math.random()* colors.length);
	return colors[random];
}

// create colors array
function generateRanColors(num) {
	// make an array
	var arr = []
	//
	for(i = 0; i<num;i++) {
		arr.push(randomColor());
	}
	//return array
	return arr;
}

// generate a single random rgb color
function randomColor() {
	var red = random = Math.floor(Math.random()* 256);
	var green = random = Math.floor(Math.random()* 256);
	var blue = random = Math.floor(Math.random()* 256);
	// push color value
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

// 




