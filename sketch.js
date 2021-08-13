const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone,hammer,iron,plane,rubber;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

	


	engine = Engine.create();
	world = engine.world;

	plane = new Plane(600,height,1200,20)
	iron = new Iron(300,350);
	stone = new Stone(700,320,100,100);
	hammer = new Hammer(10,100);
	rubber = new Rubber(400,400,50);

	//Create the Bodies Here.


  
}


function draw() {
  rectMode(CENTER);
  background("LightBlue");
  Engine.update(engine);

  plane.display();
  hammer.display();
  stone.display();
  iron.display();
  rubber.display();
  
  drawSprites();
 
}



