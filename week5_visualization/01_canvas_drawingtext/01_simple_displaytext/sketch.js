// Chris McKinlay
// Textual Computing, Fall 2014
// https://github.com/cem3394/text

// Ported from Learning Processing
// https://github.com/mckinlay/LearningProcessing

// Example 17-1: Simple displaying text

function setup() {
  createCanvas(640, 480);
} 

function draw() {
  background(100);
  // Text can have a fill and a stroke!
  fill(0);        
  stroke(255);
  // You can use any available web font
  textFont('Georgia');
  textSize(64);

  // Draw the text at an x/y
  text("Strings!", 10, height/2);
}

