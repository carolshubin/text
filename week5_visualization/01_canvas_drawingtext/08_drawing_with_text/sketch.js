// Chris McKinlay
// Textual Computing, Fall 2014
// https://github.com/cem3394/text

// Ported from Generative Gestaltung, ISBN: 978-3-87439-759-9
// First Edition, Hermann Schmidt, Mainz, 2009
// Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
// Copyright 2009 Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * draw tool. shows how to draw with dynamic elements. 
 * 
 * MOUSE
 * drag                : draw with text
 * 
 */


var x = 0, y = 0;
var stepSize = 5.0;

var letters = "This is some text lots of text.";
var fontSizeMin = 3;
var angleDistortion = 0.0;

var counter = 0;


function setup() {
  // use full screen size 
  createCanvas(800, 600);
  background(255);

  textFont("American Typewriter");
  textAlign(LEFT);
  fill(0);
}


function draw() {
  if (mouseIsPressed) {
    var d = dist(x,y, mouseX,mouseY);
    textSize(fontSizeMin+d/2);
    var newLetter = letters.charAt(counter);
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      var angle = atan2(mouseY-y, mouseX-x); 

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();

      counter++;
      if (counter > letters.length-1) counter = 0;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize; 
    }
  }
}


function mousePressed() {
  x = mouseX;
  y = mouseY;
}















