
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var stone1;
var hammer1;
var plane1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400)
engine = Engine.create();
  world = engine.world;
  plane1= new Plane(800,400,180,20);
  hammer1= new Hammer(320,120,100,30);
  stone1= new  Stone(400,400,50,100);
  

}


function draw() {
	background("blue");
  rectMode(CENTER);
  Engine.update(engine);
  plane1.display();
  hammer1.display();
stone1.display();
//plane1.collide(stone1);
  drawSprites();
 
}



