/*
* 5c) Add random color to our ellipse
*/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  let color1 = random(0, 255)
  let color2 = random(0, 255)
  let color3 = random(0, 255)

  if (mouseIsPressed) {
    fill(color1, color2, color3);
  } else {
    fill(color3, color2, color1);
  }
  ellipse(mouseX, mouseY, 80, 80);
}