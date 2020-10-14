
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject;
var ground;
var dustbin1 , dustbin2 , dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(505,598.5,10,150);
	dustbin2 = new Dustbin(400,670,200,20);
	dustbin3 = new Dustbin(305,598.5,10,150);

    ground = new Ground(400,680,800,20);
    paperObject = new Paper(100,650,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:2,y:-5});
	}

}


