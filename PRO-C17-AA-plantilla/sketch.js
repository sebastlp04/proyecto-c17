var box;
var box2;
var box3;

function setup() 
{
  createCanvas(400, 400);
  box = new Box(100,100,20,20,0,2);
  box2 = new Box(100,100,20,20,2,0);
  box3 = new Box(200,150,20,20,2,2);
}

function draw() 
{
  background(220);
  box.show();
  box2.show();
  box3.show();
  box.moveup();
  box2.move();
  box3.movei();
  
}

