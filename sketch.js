
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(250,150,50,20);
	bob1 = new bob(320,400,40)
	Grua= new grua(150,220,200,200)
	rope1=new rope(bob1.body,roofObject.body,0, 0)
	caja1=new caja(500,380,250,25)
ground= new roof(500,400,200,20)
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Grua.display(); 
  roofObject.display();
 ground.display();
  rope1.display();
  caja1.display();
  bob1.display();

  
  
  
 
}

function keyPressed()
 { if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position, 
		{x:50,y:-45}); 
	}
 }





