let testVaruable; // declare a global variable 

let lookX = 0; //initialize variable with value of 0 (sets data type)

function setup() { //setup function runs one time at beginning of program execution 
  createCanvas(400, 400); // setting the size of our sketch 
}

function draw() {//draw function runs over and over after the setup function has finished 
    background(215); //turn every pixel white 
  fill(25,300,85); //change color of inside of drawn shapes
  strokeWeight(10);
  stroke(200, 340, 150); //change color of outline of drawn shapes
  
  
//drawing eyes
  square(60, 60, 80); //draw an square centered on (60, 60) with a width of 80px and height of 60px 
  square(260, 60, 80); //darw an sqaure centered on (100, 100) with a width of 80px and height of 60px 

  //draw nose
  arc(200, 190, 80, 80, 0, PI + QUARTER_PI); //arc draws a section of an elliptical curve using radians
  
  
  //width and height are system variables that have values equal to the width and height of our sketch
  ellipse(width / 2, 320, 300, 100, 0); //ellipse draws a section of an elliptical curve using radians
   
  line(width /2 , 320, 1000, 320); //draws a line that passes through right side of the mouth-shaped round
  
 //making moving pupils
  fill(250); //set fill to black
  noStroke(); //set stroke to none
  
  lookX =map(mouseX, 0, width, -20, 20, true);
  
  ellipse(100, 100, 20, 20); // draw an ellipse centered on (100, 100) with a width of 80px and height of 40px
  ellipse(300, 100, 20, 20); //draw an ellipse centered on (100, 100) with a width of 80px and height of 40px 
  
  //console.log lets us view the values of variables in the console
  console.log(mouseX + ", " + mouseY); //mouseX and mouse Y are system variables that show mouse position
}