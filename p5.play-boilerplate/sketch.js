function setup() {
  createCanvas(450,800);
  ground1 = new Ground(225,780,450,20);
}

function draw() {
  background(255,255,255);
  
  ground1.display();

  drawSprites();
}