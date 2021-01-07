const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	bobObject1=new Bob(750,400,200)
	bobObject2=new Bob(750,400,200)
	bobObject3=new Bob(750,400,200)
	bobObject4=new Bob(750,400,200)
	bobObject5=new Bob(750,400,200)
	roof=new Roof(400,690,800,20)
	r=new Roof(bobObject1.body,bobObject2.body,bobObject3.body,bobObject4.body,bobObject5.body);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();  
  r.display();
 
  drawSprites();
 
}
function keyPressed(){
	if (keyCode==UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:105,y:105})
	}
}





